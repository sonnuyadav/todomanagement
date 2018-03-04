import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { FormsModule } from '@angular/forms';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, EditRoutingModule, PageHeaderModule,HttpModule,FormsModule],
    declarations: [EditComponent]
})
export class EditModule {}
