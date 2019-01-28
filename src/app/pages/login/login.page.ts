import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services';
import { Router } from '@angular/router';
import { FormModel } from 'src/app/_models/form.model';
import { InputModel } from 'src/app/_models/input.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private userForm: FormModel = new FormModel(
        [
            new InputModel( "Username", "text", true, this.ValidateInput ),
            new InputModel( "Password", "password", false, this.ValidateInput )
        ],
        "Log in"
    );

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    login() {
        console.log( this.userForm ); 

        console.log(this.userForm.Validate());
        /*this.authenticationService.login(this.user.Username.Value, this.user.Password.Value).subscribe(
            data => {
                localStorage.setItem("token", data["access_token"].toString());
                this.router.navigate(['/']);
            }, err => {
                this.analyseError(err);
            });*/
    }

    analyseError(error: any) {
        console.log(error);
        if (error.status !== 200) {
            this.router.navigate(['/login']);
        }
    }

    public ValidateInput( value: string ): boolean { return value.length > 5 }

}
