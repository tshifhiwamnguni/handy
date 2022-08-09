import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElectriciansComponent } from './jobs/electricians/electricians.component';
import { MasonsComponent } from './jobs/masons/masons.component';
import { PaintersComponent } from './jobs/painters/painters.component';
import { PlumbersComponent } from './jobs/plumbers/plumbers.component';
import { PostsComponent } from './posts/posts.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { ServsComponent } from './servs/servs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServsComponent, children:[
    {path: 'plumbers' , component: PlumbersComponent},
    {path: 'electricians' , component: ElectriciansComponent},
    {path: 'painters' , component: PaintersComponent},
    {path: 'masons' , component: MasonsComponent}


  ]},
  {path: 'quotations', component: QuotationsComponent},
  {path: 'posts', component: PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
