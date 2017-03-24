import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http, Headers,Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { User } from './user.model';

@Injectable()
export class AuthService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    public token: string;
    redirectUrl: string = '/';

    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post('/api/login', { email: username, password: password }, this.options)
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('id_token', token);
                    localStorage.setItem('currentUser', JSON.stringify({ email: username, token: token }));
                    return true;
                } else {
                    return false;
                }
            });
    }
 
    logout(): void {
        this.token = null;
        localStorage.removeItem('id_token');
        localStorage.removeItem('currentUser');
    }
    loggedIn() {
      return tokenNotExpired();
    }
    getProfile() {
      return JSON.parse(localStorage.getItem('currentUser'));
    }

}
