import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ConstantService} from '../constant.services';
import {TodoService} from './todo.service';
import { DatePipe } from '@angular/common';
@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    animations: [routerTransition()],
    providers: [DatePipe]
})
export class TodoComponent implements OnInit {
    constructor(
        private router: Router,
        private cons : ConstantService,
        private todoService : TodoService,
        private datePipe: DatePipe
    ) {
        this.getLead();
    }
 
    ngOnInit() {}
    compData;
    getLead(){
        this.todoService.getLead().subscribe(res => {this.compData = res.json();
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
