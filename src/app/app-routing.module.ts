import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaytimeComponent } from './playtime/playtime.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardStatsComponent } from './dashboard/dashboard-stats/dashboard-stats.component';
import { ManageMessagesComponent } from './dashboard/manage-messages/manage-messages.component';
import { ManageBlogComponent } from './dashboard/manage-blog/manage-blog.component';
import { SettingsComponent } from './dashboard/settings/settings.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'playtime', component: PlaytimeComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'dashboard-stats', component: DashboardStatsComponent },
      { path: 'inbox', component: ManageMessagesComponent },
      { path: 'manage-blog', component: ManageBlogComponent },
      { path: 'settings', component: SettingsComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
