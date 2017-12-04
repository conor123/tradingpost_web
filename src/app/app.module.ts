import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MyAdvertsComponent } from "./adverts/my-adverts/my-adverts.component";
import { CreateAdvertComponent } from './adverts/create-advert/create-advert.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth/auth.service';
import { ConfigService } from './config/config.service';
import { RouteProtectionService } from "./auth/route-protection.service";
import { AdvertService } from "./adverts/advert.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    PageNotFoundComponent,
    DashboardComponent,
    MyAdvertsComponent,
    CreateAdvertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, ConfigService, RouteProtectionService, AdvertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
