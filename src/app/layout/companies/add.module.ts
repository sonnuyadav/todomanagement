import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { FormsModule } from '@angular/forms';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, AddRoutingModule, PageHeaderModule,HttpModule,FormsModule],
    declarations: [AddComponent],
    
})
export class AddModule {}
