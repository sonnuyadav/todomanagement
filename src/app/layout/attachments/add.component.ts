import { Component, OnInit ,Input, EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { routerTransition } from '../../router.animations';
import { AttachmentsService } from './attachments.service';
import { Attachments} from './attachments';
import {AlertService} from "../alert.service";
import {ConstantService} from '../constant.services';
 
@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    animations: [routerTransition()]
})

export class AddComponent implements OnInit {
  @Input() name;

  @Output() onOutput = new EventEmitter();
   constructor(
        private router: Router,
        private route: ActivatedRoute,
        private attachmentService: AttachmentsService,
        private alertservice: AlertService,
        private elem : ElementRef,
        private cons : ConstantService
    ) {} 
  
    ngOnInit() {
      //this.attachmentService.getCompanies();
    } 
   
    model = new Attachments();
  
    @ViewChild('file') public file;
    addAttachment(form : NgForm){
      let fileList: FileList = this.file.nativeElement.files; 
      let formData: FormData = new FormData();  
      if (fileList.length > 0) {  
        let file: File = fileList[0];  
         
        formData.append('uploadFile', file, file.name);
        for(let item in this.model){
          formData.append(item, this.model[item]);
        }
        
        this.attachmentService.addAttachment(formData).subscribe((res) => {
          if(res.status =='true'){
           
               setTimeout(() => {     
                 this.cons.setAlert('Attachment added successfully', 1);         
                  this.router.navigate(['attachments/add']);
                }, 1000); 
                form.resetForm();
                this.file.nativeElement.value='';
              }else{
                this.cons.setAlert('Opps something wrong!', 0); 
              }
         });
      } 
    }
  }