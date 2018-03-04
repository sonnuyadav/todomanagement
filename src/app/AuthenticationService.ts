import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { map } from 'rxjs/operators';
import {ConstantService} from './layout/constant.services';

@Injectable()
export class AuthenticationService {
    constructor(public _http:Http, public ConstantService: ConstantService) { }
    user = {
        username:'',
        password:'',
        action:'',
        token:''
    }
    url = this.ConstantService.API_ENDPOINT+'Auth.php';
    login(){  
        this.user.action = 'Login';        
        return this._http.post(this.url,this.user)
        .map(res=>res.json());
    }
    logout(){
        this.user.action = 'Logout';
        return this._http.post(this.url,this.user)
        .map(res=>res.json());
    }
}
