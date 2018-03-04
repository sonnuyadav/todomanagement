import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttachmentsRoutingModule } from './attachments-routing.module';
import { AttachmentsComponent } from './attachments.component';
import { PageHeaderModule } from './../../shared';
import { AttachmentsService } from './attachments.service';

@NgModule({
    imports: [CommonModule, AttachmentsRoutingModule, PageHeaderModule],
    declarations: [AttachmentsComponent],
    providers: [AttachmentsService]
})
export class AttachmentsModule {}
