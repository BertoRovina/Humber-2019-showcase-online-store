import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GetPageComponent } from './get-page/get-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoryComponent } from './category/category.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpErrorHandler} from './http-error-handler.service';
import {MessageService} from './message.service';
import { CustomerComponent } from './customer/customer.component';
import {CustomerService} from './customer/customer.service';
import { PostPageComponent } from './post-page/post-page.component';
import { PutPageComponent } from './put-page/put-page.component';
import { DelPageComponent } from './del-page/del-page.component';
import {ProductComponent} from './product/product.component';
import {OrderComponent} from './order/order.component';
import {ProductService} from './product/product.service';
import {CategoryService} from './category/category.service';

@NgModule({
    declarations: [
        AppComponent,
        GetPageComponent,
        SideNavComponent,
        CategoryComponent,
        HomePageComponent,
        CustomerComponent,
        ProductComponent,
        OrderComponent,
        PostPageComponent,
        PutPageComponent,
        DelPageComponent
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
      MessageService,
      CategoryService,
      CustomerService,
      ProductService
    ],
    bootstrap: [AppComponent]

})
export class AppModule { }
