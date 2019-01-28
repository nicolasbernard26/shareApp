import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Url } from '../_constants/url';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class HttpService {

    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService
    ) {
    }

    public post(body: object): Observable<object> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.authenticationService.getToken()
            })
        };

        return this.http.post(Url.token, body, httpOptions)
    }

    public get<T>(url: string): Observable<T> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.authenticationService.getToken()
            })
        };

        return this.http.get<T>(url, httpOptions)
    }

}
