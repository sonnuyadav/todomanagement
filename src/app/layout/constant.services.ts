import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ConstantService {

API_ENDPOINT :String;
SUCCESS_MSG :String;
ERROR_MSG :String;
constructor() {
  
    this.API_ENDPOINT = 'http://go.dynateam.in/lead/';   
   // this.API_ENDPOINT = 'http://localhost/leadmanagement/';   
  }
  setAlert(msg, type){    
    this.SUCCESS_MSG = '';
    this.ERROR_MSG = '';
    if(type == 1){
      this.SUCCESS_MSG = msg;
    }
    if(type == 0){
      this.ERROR_MSG = msg;
    }
    if(type != 2){
      setTimeout(() => this.setAlert('',2), 3000);
    }
  }  
}

