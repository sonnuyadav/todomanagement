import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { PageHeaderModule } from './../../shared';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
    imports: [CommonModule, AddRoutingModule, PageHeaderModule,FormsModule,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()],
    declarations: [AddComponent]
})
export class AddModule {}
