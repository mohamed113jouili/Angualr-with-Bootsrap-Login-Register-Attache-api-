import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { WeatheComponent } from './weathe/weathe.component';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import { FormweatheComponent } from './formweathe/formweathe.component';
import { TableweatheComponent } from './tableweathe/tableweathe.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';




const appRoutes: Routes =
  [
    { path: '',  redirectTo: '/login', pathMatch: 'full' },

   
   
    { path: 'login', component: LoginComponent },
     { path: 'singup', component: SignupComponent },
   /*   { path: 'weathe', component: WeatheComponent }, */

     {
      path: 'weathe',
      component: WeatheComponent,

      children: [

        { path: '', redirectTo: 'home', pathMatch: 'full' },

        { path: 'home', component: HomeComponent },
        { path: 'users', component: UsersComponent } ,
        { path: 'users/:id', component: EditUserComponent },
        { path: '', redirectTo: 'weathe', pathMatch: 'full' },

      ]
    }

  ]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WeatheComponent,
    HeaderComponent,
    FooterComponent,
    FormweatheComponent,
    TableweatheComponent,
    UsersComponent,
    HomeComponent,
    EditUserComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
   
    BrowserAnimationsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
