import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CompaniesComponent } from '../layout/companies/companies.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'todo', loadChildren: './todo/todo.module#TodoModule' },
             { path: 'todo/add', loadChildren: './todo/add.module#AddModule' },

            { path: 'mail', loadChildren: './mail/mail.module#MailModule' },
            { path: 'mail/composemail', loadChildren: './mail/composemail.module#ComposemailModule' },
            { path: 'companies', loadChildren: './companies/companies.module#CompaniesModule' },
            { path: 'companies/addcompany', loadChildren: './companies/add.module#AddModule' },
            { path: 'company/edit/:id', loadChildren: './companies/edit.module#EditModule' },
            { path: 'attachments', loadChildren: './attachments/attachments.module#AttachmentsModule' },
            { path: 'attachments/add', loadChildren: './attachments/add.module#AddModule' },
           
           ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
