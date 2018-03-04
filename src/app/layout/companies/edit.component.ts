import { Component, OnInit ,Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { routerTransition } from '../../router.animations';
import { CompaniesService } from './companies.service';
import { Companies } from './companies';
import {ConstantService} from '../constant.services';
@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
    animations: [routerTransition()]
})

export class EditComponent implements OnInit {
  @Output() onOutput = new EventEmitter();
  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private empService: CompaniesService,
      private elem : ElementRef,
      private cons : ConstantService
   ) {} 
  
    ngOnInit() {
      this.getSingleCompany();
    } 
    getCompany
    model = new Companies();

   
    id = this.route.snapshot.params['id'];
    getSingleCompany(){
       this.empService
        .getCompany(this.id)
        .subscribe(company =>{
            this.model = company[0];
            })
    };

    //for upload data
    @ViewChild('file') public file;
    updateCompany(){
      let formData: FormData = new FormData();  
      let fileList: FileList = this.file.nativeElement.files;  
      if (fileList.length > 0) {  
        let file: File = fileList[0];  
        formData.append('uploadFile', file, file.name);
        for(let item in this.model){
          formData.append(item, this.model[item]);
        }   
      }else{
        for(let item in this.model){
          formData.append(item, this.model[item]);
        }  
      } 
    
      this.empService.updateCompany(formData).subscribe((res) => {
          if(res.status =='true'){
          //console.log(res.message);
          // this.alertservice.success('Commasdfasfs');
            setTimeout(() => {
              this.cons.setAlert('Company updated successfully', 1);               
              this.router.navigate(['companies']);
            }, 1000); 
          }else{
            this.cons.setAlert('Opps something wrong!', 0); 
            // this.alertservice.success(res.message);
            //alert('Opps something wrong!');
          }
        });
     
    }







  //   updateCompany(){
  //     this.empService
  //       .updateCompany(this.model)
  //       .subscribe(()=> this.goBack());
  // }
 
   goBack(){
    this.router.navigate(['/companies']);
  } 
  }