import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { ViewMeetingsComponent } from './view-meetings/view-meetings.component';
//import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ScheduleMeetingComponent,
    ViewMeetingsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Import FormsModule here
    HttpClientModule, // Import HttpClientModule for API calls
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
