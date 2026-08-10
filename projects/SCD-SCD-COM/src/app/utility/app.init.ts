import {  KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment';
export function initializeKeycloak(keycloak: KeycloakService):() => Promise<boolean> {
    return () =>
      keycloak.init({
        config: {
          url: environment.KEYCLOAK.KEYCLOAK_INIT_URL,
          realm: environment.KEYCLOAK.KEYCLOAK_INIT_REALM,
          clientId:  environment.KEYCLOAK.KEYCLOAK_INIT_CLIENT_ID,
        },
        initOptions: {
          checkLoginIframe:environment.KEYCLOAK.KEYCLOAK_checkLoginIframe,
            //checkLoginIframeInterval:25
        },
        loadUserProfileAtStartUp:true
        // initOptions: {
        //   onLoad: 'check-sso',
        //   silentCheckSsoRedirectUri:
        //     window.location.origin + '/assets/silent-check-sso.html'
        // }
      });
  }