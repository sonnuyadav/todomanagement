import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {ConstantService} from  '../constant.services'; 

@Injectable()
export class TodoService {
 
  constructor(private _http:Http,public ConstantService: ConstantService) { }
  checkMe:any;
  options;

  addTodo(info){
    console.log(info)
   //let url = this.ConstantService.API_ENDPOINT+'composeMail.php';
   let url = 'http://localhost:8000/createTodo';
    return this._http.post(url,info)
      .map(res=>res.json());
    }

    getLead(){
      let url = this.ConstantService.API_ENDPOINT+'getLeads.php';
      return this._http.get(url);
    }
}
