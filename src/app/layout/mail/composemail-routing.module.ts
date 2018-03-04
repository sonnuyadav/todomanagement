import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposemailComponent } from './composemail.component';

const routes: Routes = [
    {
        path: '', component: ComposemailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComposemailRoutingModule {
}
