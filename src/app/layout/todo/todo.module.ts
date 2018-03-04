import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { PageHeaderModule } from './../../shared';
import { TodoService } from './todo.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
    imports: [CommonModule,FormsModule, TodoRoutingModule, PageHeaderModule, Ng2SearchPipeModule,
        Ng2OrderModule, // importing the sorting package here
        NgxPaginationModule],
    declarations: [TodoComponent],
    providers: [TodoService,DatePipe]
})
export class TodoModule {}
