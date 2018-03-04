import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpeningComponent } from './opening.component';

const routes: Routes = [
    {
        path: '',
        component: OpeningComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OpeningRoutingModule {}
