import { Component, OnInit ,Input, EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { routerTransition } from '../router.animations';
import {ConstantService} from '../layout/constant.services';
import { AuthenticationService } from '../AuthenticationService';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
        public router: Router,
        private Auth : AuthenticationService,
        private cons : ConstantService,
       
    )
    {}

    ngOnInit() {}
    user = {
        username:'',
        password:''
    }
    onLoggedin() {
        //console.log(this.Auth.user.username, this.Auth.user.password);
        this.Auth.login().subscribe((res) => {
            if(res.status == 1) {
                //console.log(res.data);
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('name', res.data.name);
                this.cons.setAlert('', 1);
                this.router.navigate(['dashboard']);
            }else{
                this.cons.setAlert(res.msg, 0);
                console.log(this.cons.ERROR_MSG);
               
            }
        });
        
    }
}
