import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlaytimeComponent } from './playtime/playtime.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { DashboardStatsComponent } from './dashboard/dashboard-stats/dashboard-stats.component';
import { ManageMessagesComponent } from './dashboard/manage-messages/manage-messages.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { ManageBlogComponent } from './dashboard/manage-blog/manage-blog.component';
@NgModule({
  declarations: [
    AppComponent,
    PlaytimeComponent,
    DashboardComponent,
    LoginComponent,
    HomepageComponent,
    DashboardStatsComponent,
    ManageMessagesComponent,
    SettingsComponent,
    ManageBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgbModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
