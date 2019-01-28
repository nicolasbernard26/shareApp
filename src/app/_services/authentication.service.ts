import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Url } from '../_constants/url';
import { Local } from 'protractor/built/driverProviders';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string): Observable<object> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };

        return this.http.post(Url.token, `grant_type=password&username=${username}&password=${password}`, httpOptions)
    }

    isAuthenticated(): boolean {
        var authenti : boolean = (localStorage.getItem("token") != undefined);
        console.log("Authenticated : " + authenti)
        return authenti;
    }

    logout(): boolean {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('token');
        return true;
    }

    getToken(): string {
        return localStorage.getItem("token");
    }
}
