import { Component, OnInit ,Input, EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AttachmentsService } from '../attachments/attachments.service';
import { CompaniesService } from '../companies/companies.service';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import {ConstantService} from '../constant.services';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    animations: [routerTransition()],
    
})
export class AddComponent implements OnInit {
    constructor(
        private attachmentService: AttachmentsService,
        private companiesService: CompaniesService,
        private todoService: TodoService,
        private cons : ConstantService,
        private router: Router
    ) {}
    model = new Todo();
    ngOnInit() 
    {
        this.getAttachments();
        this.getCompanies()
    }
    compData;
    attachData;
    
chkArray = [];
onClicked(option, event) {
    var i = 0;
    var flag = 1;
    for(i = 0;i<=this.chkArray.length; i++){
        if(option == this.chkArray[i]){
            flag = 0;
            delete this.chkArray[i]
        }
    }
    if(flag == 1){
       this.chkArray.push(option);
    }
 // console.log(this.chkArray);
  this.chkArray;
}
 
addTodo(){
let attachData  = this.chkArray;
let data=[];
data.push(attachData);
data.push(this.model);
this.todoService.addTodo(data).subscribe((res) => {
    if(res.status =='true'){
          setTimeout(() => {     
            this.cons.setAlert('Lead added successfully', 1);         
            this.router.navigate(['todo']);
          }, 1000); 
        }else{
          this.cons.setAlert('Opps something wrong!', 0); 
        }
        });
    }

    
    getAttachments(){
        this.attachmentService.getAttachments().subscribe(res => {this.attachData = res.json();
        })
       }
       getCompanies(){
        this.companiesService.getCompanies().subscribe(res => {this.compData = res.json();
        })  
       }   
}
