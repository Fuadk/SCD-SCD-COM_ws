import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
  
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    if(!environment.KEYCLOAK.KEYCLOAK_checkLoginIframe)
      return;
    console.log('=== AUTH GUARD TRIGGERED ===');
    console.log('Current URL:', window.location.href);
    console.log('Target state URL:', state.url);
    
    // Check if we're returning from Keycloak redirect
    const isRedirectFromKeycloak = window.location.hash.includes('state=') && 
                                  window.location.hash.includes('session_state=');
    
    if (isRedirectFromKeycloak) {
      console.log('Detected Keycloak redirect return');
      console.log('Waiting for Keycloak to process tokens...');
      
      // Wait a bit for Keycloak to process the tokens
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Force token refresh and state update
      try {
        const token = await this.keycloak.getToken();
        console.log('Token retrieved after redirect');
        
        // Update the authenticated state
        this.authenticated = await this.keycloak.isLoggedIn();
        console.log('Authenticated state after redirect:', this.authenticated);
        
        if (this.authenticated) {
          // Clear the URL fragment
          window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
          console.log('URL cleaned up');
          return true;
        }
      } catch (error) {
        console.error('Error processing redirect:', error);
      }
    }
    
    // Normal authentication check
    if (!this.authenticated) {
      console.log('Not authenticated, checking with service...');
      const serviceCheck = await this.keycloak.isLoggedIn();
      console.log('Service isLoggedIn():', serviceCheck);
      
      if (!serviceCheck) {
        console.log('Redirecting to Keycloak login...:', window.location.origin ,state.url, window.location );
        const redirectUri:any = window.location ;
        console.log('Redirect URI:', redirectUri);
        
        await this.keycloak.login({
          redirectUri: redirectUri
        });
        return false;
      } else {
        // Service says we're logged in but guard doesn't know - update state
        this.authenticated = true;
        console.log('Updated guard authenticated state to true');
      }
    }
    
    console.log('Authentication successful');
    
    // Get the roles required from the route.
    const requiredRoles = route.data['roles'];

    // Allow the user to proceed if no additional roles are required to access the route.
    if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.every((role) => this.roles.includes(role));
  }
}