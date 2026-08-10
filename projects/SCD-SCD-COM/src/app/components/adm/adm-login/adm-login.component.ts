

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { starServices } from 'starlib';


//import { AlertService, AuthenticationService } from '../../../_services';
@Component({
  selector: 'app-adm-login',
  templateUrl: './adm-login.component.html',
  styleUrls: ['./adm-login.component.css']
})

export class AdmLoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    private Body =[];

    public navTo = "";
    public shareTo = "";

    

    @Output() loginCompleted: EventEmitter<any> = new EventEmitter();
    constructor(
        public starServices: starServices,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
      //  private authenticationService: AuthenticationService,
       // private alertService: AlertService
    ) {
        // redirect to home if already logged in
        /*if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }*/
    }

    ngOnInit() {
        this.starServices.hideNoValidLicense();
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f():any { return this.loginForm.controls; }
    private addToBody(NewVal){
        this.Body.push(NewVal);
    }
    public setCookie(name,value,days) {
        document.cookie = name + "=";
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date;
        }
        //console.log("expires:",expires )
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    onSubmit() {

        this.submitted = true;

        // stop here if form is invalid
        /*if (this.loginForm.invalids) {
            return;
        }*/

        this.loading = true;
        let appgenStr = "user=" + this.loginForm.value.username + "; " + "pass=" + this.loginForm.value.password + "; "
        let appgenStrEng = this.starServices.encryptData(appgenStr)
        //console.log("passwEnc:", appgenStrEng)
        this.setCookie("appgen",appgenStrEng,1)
        //document.cookie = "appgen="+ appgenStrEng + ";";
        //document.cookie = "name=;";
        
        let allCookies = document.cookie;
        //console.log("allCookies:", allCookies)
        this.starServices.login(this,this.f.username.value, this.f.password.value);
        
  
        this.submitted = true;
        this.loading = false;
    
        /*this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                 //   this.alertService.success(this.f.username.value);
                  this.router.navigate(['/invoices']);
                         },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
                */
    }
}
