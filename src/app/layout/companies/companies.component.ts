import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CompaniesService } from './companies.service';
import { Companies } from './companies';
import { ViewContainerRef } from '@angular/core';
import {ConstantService} from '../constant.services';
 
@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.scss'],
    animations: [routerTransition()]
})
export class CompaniesComponent implements OnInit {
//  @ViewChild(DataTable) carsTable: DataTable;
    constructor(
        private compService: CompaniesService,
        public vcr: ViewContainerRef,
        private cons : ConstantService
      ) {        
          
       }
       
      alertMessage;
      compData;
      ngOnInit() {
        this.getCompanies()      
      }
    
    getCompanies(){
      this.compService.getCompanies().subscribe(res => {this.compData = res.json();
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
  
      deleteEmployee(id){
       if(confirm("Are you sure to delete.")){
          this.compService
          .deleteEmployee(id)
          .subscribe(() => {
          this.cons.setAlert('Company Deleted successfully', 1);  
         // this.getCompanies();
         })
        }
        
    }
}
