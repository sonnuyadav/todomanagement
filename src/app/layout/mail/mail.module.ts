import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail.component';
import { PageHeaderModule } from './../../shared';
import { MailService } from './mail.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
    imports: [CommonModule,FormsModule, MailRoutingModule, PageHeaderModule, Ng2SearchPipeModule,
        Ng2OrderModule, // importing the sorting package here
        NgxPaginationModule],
    declarations: [MailComponent],
    providers: [MailService,DatePipe]
})
export class MailModule {}
