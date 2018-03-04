import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttachmentsComponent } from './attachments.component';

const routes: Routes = [
    {
        path: '', component: AttachmentsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AttachmentsRoutingModule {
}
