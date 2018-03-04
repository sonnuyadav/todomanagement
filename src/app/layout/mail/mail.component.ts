import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ConstantService} from '../constant.services';
import {MailService} from './mail.service';
import { DatePipe } from '@angular/common';
@Component({
    selector: 'app-mail',
    templateUrl: './mail.component.html',
    styleUrls: ['./mail.component.scss'],
    animations: [routerTransition()],
    providers: [DatePipe]
})
export class MailComponent implements OnInit {
    constructor(
        private router: Router,
        private cons : ConstantService,
        private mailService : MailService,
        private datePipe: DatePipe
    ) {
        this.getLead();
    }
 
    ngOnInit() {}
    compData;
    getLead(){
        this.mailService.getLead().subscribe(res => {this.compData = res.json();
           })
       }

 //sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;
}
