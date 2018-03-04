import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { map } from 'rxjs/operators';
import {ConstantService} from  '../constant.services'; 
import 'rxjs/add/operator/map';

@Injectable()
export class AttachmentsService {
 
  constructor(public _http:Http, public ConstantService: ConstantService) { }
  checkMe:any;
  options;
  
  addAttachment(info){
    let url = this.ConstantService.API_ENDPOINT+'addAttachments.php';
    return this._http.post(url,info)
      .map(res=>res.json());
    }

    getAttachments(){ 
       let url = this.ConstantService.API_ENDPOINT+'getAttachments.php';
       return this._http.get(url);
     }

     delete(id){
      let url = this.ConstantService.API_ENDPOINT+'DeleteAttachments.php/';
      return this._http.post(url,{'id':id})
      .map(()=>this.getAttachments());
     }
}
