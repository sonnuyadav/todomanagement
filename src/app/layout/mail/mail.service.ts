import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {ConstantService} from  '../constant.services'; 
import {AttachmentsService} from  '../attachments/attachments.service'; 

@Injectable()
export class MailService {
 
  constructor(private _http:Http,public ConstantService: ConstantService,public AttachmentsService:AttachmentsService) { }
  checkMe:any;
  options;

  addMail(info){
   let url = this.ConstantService.API_ENDPOINT+'composeMail.php';
    return this._http.post(url,info)
      .map(res=>res.json());
    }

    getLead(){
      let url = this.ConstantService.API_ENDPOINT+'getLeads.php';
      return this._http.get(url);
    }
}
