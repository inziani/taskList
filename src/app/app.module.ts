import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './core/authentication/login/login.component';
import { SignupComponent } from './core/authentication/signup/signup.component';
import { HeaderNavComponent } from './core/shared/header-nav/header-nav.component';
import { SideNavComponent } from './core/shared/side-nav/side-nav.component';
import { HomePageComponent } from './application-components/home-page/home-page.component';
import { CreateTaskComponent } from './application-components/create-task/create-task.component';
import { ChangeTaskComponent } from './application-components/change-task/change-task.component';
import { FooterComponent } from './core/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderNavComponent,
    SideNavComponent,
    HomePageComponent,
    CreateTaskComponent,
    ChangeTaskComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
