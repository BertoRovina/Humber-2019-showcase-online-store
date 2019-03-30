import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GetPageComponent } from './get-page/get-page.component';
import { GetByIdFormComponent } from './get-by-id-form/get-by-id-form.component';
import { AppRoutingModule } from './app-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoryComponent } from './category/category.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpErrorHandler} from './http-error-handler.service';
import {MessageService} from './message.service';

@NgModule({
    declarations: [
        AppComponent,
        GetPageComponent,
        GetByIdFormComponent,
        SideNavComponent,
        CategoryComponent,
        HomePageComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
      HttpErrorHandler,
      MessageService
    ],
    bootstrap: [AppComponent]

})
export class AppModule { }
