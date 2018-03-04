import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { CompaniesModule } from './layout/companies/companies.module';
import { AttachmentsModule } from './layout/attachments/attachments.module';
import { MailModule } from './layout/mail/mail.module';
import { TodoModule } from './layout/todo/todo.module';
import { AlertService } from './layout/alert.service';
import {ConstantService} from  './layout/constant.services';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
       ToastModule.forRoot(),
         TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        HttpModule,AttachmentsModule,CompaniesModule,MailModule,TodoModule
,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()    ],
    declarations: [AppComponent],
    providers: [AuthGuard,AlertService,ConstantService],
    bootstrap: [AppComponent]
})
export class AppModule {}
