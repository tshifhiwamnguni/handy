import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServsComponent, children:[
    {path: 'plumbers' , component: PlumbersComponent},
    {path: 'electricians' , component: ElectriciansComponent},
    {path: 'painters' , component: PaintersComponent},
    {path: 'masons' , component: MasonsComponent},
  ]},
  {path: 'quotations', component: QuotationsComponent},
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
