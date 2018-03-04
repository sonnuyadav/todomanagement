import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { map } from 'rxjs/operators';
//import { DataTableParams } from '../../data-table';
import {ConstantService} from  '../constant.services'; 
//function for datatable



@Injectable()
export class CompaniesService {
 
  constructor(private _http:Http,public ConstantService: ConstantService) { }
  checkMe:any;
  options;

  getCompanies(){ 
    let url = this.ConstantService.API_ENDPOINT+'getCompanies.php';
   return this._http.get(url);
 }
 
 

  addCompany(info){
    let url = this.ConstantService.API_ENDPOINT+'addCompanies.php';
    return this._http.post(url,info)
      .map(res=>res.json());
    }
  
    getCompany(id){
      let url = this.ConstantService.API_ENDPOINT+'getOneCompanies.php';
      return this._http.post(url,{'id':id})
        .map(res=>res.json());
    }

    updateCompany(info){
      let url = this.ConstantService.API_ENDPOINT+'updateCompany.php';
      return this._http.post(url, info)
        .map(res=>res.json());
    }

    deleteEmployee(id){
      let url = this.ConstantService.API_ENDPOINT+'DeleteCompanies.php';
      return this._http.post(url,{'id':id})
        .map(()=>this.getCompanies());
    }
}
