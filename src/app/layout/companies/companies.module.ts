import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { PageHeaderModule } from './../../shared';
//for services
import { CompaniesService } from './companies.service';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
    imports: [CommonModule, CompaniesRoutingModule, PageHeaderModule,FormsModule,Ng2SearchPipeModule,
        Ng2OrderModule,NgxPaginationModule],
    declarations: [CompaniesComponent],
    ////for services
    providers: [CompaniesService]
})
export class CompaniesModule {}
