import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './client/home/home.component';
import { ElectriciansComponent } from './client/jobs/electricians/electricians.component';
import { MasonsComponent } from './client/jobs/masons/masons.component';
import { PaintersComponent } from './client/jobs/painters/painters.component';
import { PlumbersComponent } from './client/jobs/plumbers/plumbers.component';
import { PostsComponent } from './client/posts/posts.component';
import { QuotationsComponent } from './client/quotations/quotations.component';
import { ServsComponent } from './client/servs/servs.component';
import { ActiveComponent } from './client/tabs/active/active.component';
import { HistoryComponent } from './client/tabs/history/history.component';
import { PendingComponent } from './client/tabs/pending/pending.component';
import { ActiveJobsComponent } from './service provider/active-jobs/active-jobs.component';
import { CompleteJobsComponent } from './service provider/sp tabs/complete-jobs/complete-jobs.component';
import { JobRequestsComponent } from './service provider/sp tabs/job-requests/job-requests.component';
import { SpHomeComponent } from './service provider/sp-home/sp-home.component';


const routes: Routes = [
  // {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'quotations', component: QuotationsComponent},


  {path: 'sphome', component: SpHomeComponent, children: [
    {path: 'activejobs', component: ActiveJobsComponent},
    {path: 'completejobs', component: CompleteJobsComponent},
    {path: 'jobsrequests', component: JobRequestsComponent},

  ]},
  {path: 'services', component: ServsComponent, children:[
    {path: 'plumbers' , component: PlumbersComponent},
    {path: 'electricians' , component: ElectriciansComponent},
    {path: 'painters' , component: PaintersComponent},
    {path: 'masons' , component: MasonsComponent},
  ]},

  {path: 'posts', component: PostsComponent,children:[
    {path: 'active' , component: ActiveComponent},
    {path: 'pending' , component: PendingComponent},
    {path: 'history' , component: HistoryComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
