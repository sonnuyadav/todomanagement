import { Component, OnInit ,Input, EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { routerTransition } from '../../router.animations';
import { CompaniesService } from './companies.service';
import { Companies } from './companies';
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
  formInfo = {
    name: '',
    email: '',
    phone: ''
  }
  @Output() onOutput = new EventEmitter();
   constructor(
        private router: Router,
        private route: ActivatedRoute,
        private empService: CompaniesService,
        private alertservice: AlertService,
        private elem : ElementRef,        
        private cons : ConstantService
    ) {      
    } 
  
    ngOnInit() {
      this.onOutput.emit(this.formInfo);
      this.empService.getCompanies();
    } 
   
    model = new Companies();
    // createBlob(event){
    //   let fileList: FileList = event.target.files;  
    //   if (fileList.length > 0) {  
    //     let file: File = fileList[0];  
    //     let formData: FormData = new FormData();  
    //     formData.append('uploadFile', file, file.name);
    //     console.log(formData  )
    //     this.empService.addCompany(formData).subscribe((res) => {
        
    //       if(res.status =='true'){
    //         //console.log(res.message);
    //         // this.alertservice.success('Commasdfasfs');
    //         setTimeout(() => {
    //             alert('Company added successfully');
    //             this.router.navigate(['companies']);
    //           }, 1000); 
            
    //           }else{
    //         // this.alertservice.success(res.message);
    //         alert('Opps something wrong!');
    //         }
    //         });
    //     } 
      
    // }

    @ViewChild('file') public file;
    addCompany(){
      let fileList: FileList = this.file.nativeElement.files;  
      if (fileList.length > 0) {  
        let file: File = fileList[0];  
        let formData: FormData = new FormData();  
        formData.append('uploadFile', file, file.name);
        for(let item in this.model){
          formData.append(item, this.model[item]);
        }
        
        this.empService.addCompany(formData).subscribe((res) => {
          if(res.status =='true'){
          //console.log(res.message);
          // this.alertservice.success('Commasdfasfs');
            setTimeout(() => {     
              this.cons.setAlert('Company added successfully', 1);         
              this.router.navigate(['companies']);
            }, 1000); 
          }else{
            this.cons.setAlert('Opps something wrong!', 0); 
            // this.alertservice.success(res.message);
            //alert('Opps something wrong!');
          }
        });
      } 
    }
  }