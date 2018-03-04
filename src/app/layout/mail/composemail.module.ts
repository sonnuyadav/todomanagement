import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComposemailRoutingModule } from './composemail-routing.module';
import { ComposemailComponent } from './composemail.component';
import { PageHeaderModule } from './../../shared';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
    imports: [CommonModule, ComposemailRoutingModule, PageHeaderModule,FormsModule,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()],
    declarations: [ComposemailComponent]
})
export class ComposemailModule {}
