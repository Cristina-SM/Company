import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/login/login.component';
import { SearchComponent } from './views/search/search.component';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GmailComponent } from './views/gmail/gmail.component';
import { ProductsComponent } from './views/list/products/products.component';
import { FiltroPipe } from './filtro.pipe';
import { WorkersComponent } from './views/list/workers/workers.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AccountComponent } from './views/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
    LoginComponent,
    SearchComponent,
    HomeComponent,
    GmailComponent,
    ProductsComponent,
    FiltroPipe,
    WorkersComponent,
    AccountComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
