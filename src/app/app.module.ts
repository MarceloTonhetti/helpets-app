
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { ToastrModule } from  "./node_modules/ngx-toastr";

import { UsersModule } from './modules/users/users.module';

import { NavigationModule } from './modules/navigation/navigation.module';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdminComponent } from './modules/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //  ToastrModule.forRoot(),
    NavigationModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule


  
  ],
  providers: [

    UsersModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
