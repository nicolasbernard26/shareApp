import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import { HttpHeaders } from '@angular/common/http/src/headers';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string): Observable<object> {
        const url = 'http://localhost:8000/get-token/';
        console.log('We are loging in');
        return this.http.post(url, { username: username, password: password });
    }

    authenticated(): boolean {
        var authenti : boolean = (localStorage.getItem("token") != undefined);
        console.log("Authenticated : " + authenti)
        return authenti;
    }

    logout(): boolean {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('token');
        return true;
    }
}
