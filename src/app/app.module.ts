import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { MainContainerComponent } from './core/main-container/main-container.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginModule } from './feature/login/login.module';
import { HomeModule } from './feature/home/home.module';
import { RegisterModule } from './feature/register/register.module';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MainContainerComponent,
    SideBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule, HomeModule, RegisterModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
