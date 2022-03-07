import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { UserProfileComponent } from './application-components/user-profile/user-profile.component';
import { TaskListComponent } from './application-components/task-list/task-list.component';
import { AuthenticationService } from './core/services/authentication.service';
import { RestDataSource } from './core/shared/data/rest.datasource';
import { DatePipe } from '@angular/common';

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
    FooterComponent,
    UserProfileComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    AuthenticationService,
    RestDataSource,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
