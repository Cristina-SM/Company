import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SearchComponent } from './views/search/search.component';
import { LoginComponent } from './views/login/login.component';
import { ContactComponent } from './views/contact/contact.component';
import { GmailComponent } from './views/gmail/gmail.component';
import { AccountComponent } from './views/account/account.component';


const Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full' },
  {path: 'home', component: HomeComponent},
  {path:'search', component:SearchComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path: 'gmail', component: GmailComponent},
  {path: 'account', component: AccountComponent},
  {path: '**', component: HomeComponent}

];
@NgModule({
  exports:[RouterModule],
  imports: [
    CommonModule,
    [RouterModule.forRoot(Routes)]
  ]
})
export class AppRoutingModule { }
