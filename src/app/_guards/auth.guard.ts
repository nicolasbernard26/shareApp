import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../_services/index';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate() {
        var login : boolean = this.authenticationService.isAuthenticated();
        if (!login) {
            this.router.navigate(['/login']);
        }
        return login;
    }
}
