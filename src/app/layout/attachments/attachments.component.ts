import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AttachmentsService } from './attachments.service';
@Component({
    selector: 'app-attachments',
    templateUrl: './attachments.component.html',
    styleUrls: ['./attachments.component.scss'],
    animations: [routerTransition()]
})
export class AttachmentsComponent implements OnInit {
    constructor(
       private attachmentsService: AttachmentsService
    ) {}

    ngOnInit() {
        this.getAttachments();
    }
    compData;
    getAttachments(){
        this.attachmentsService.getAttachments().subscribe(res => {this.compData = res.json();
        
        })
       }
    //for delete image
    delete(id){
        this.attachmentsService.delete(id).subscribe(() => {
             this.getAttachments();
             
        } )
    }   
}
