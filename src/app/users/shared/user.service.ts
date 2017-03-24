import { Injectable } from '@angular/core';
import { Http, Headers,Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { User } from './user.model';

@Injectable()
export class UserService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });


    constructor(private http: Http) {
       
    }
    register(user:User) : Observable<any> {

        return this.http.post('/api/register', JSON.stringify(user), this.options).map(res => res.json());

    }
   
    getUsers() : Observable<User[]> {

        return this.http.get('/api/users').map(res => res.json());
    } 

   

}
