import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { ElectriciansComponent } from './client/jobs/electricians/electricians.component';
import { MasonsComponent } from './client/jobs/masons/masons.component';
import { PaintersComponent } from './client/jobs/painters/painters.component';
import { PlumbersComponent } from './client/jobs/plumbers/plumbers.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { PostsComponent } from './client/posts/posts.component';
import { QuotationsComponent } from './client/quotations/quotations.component';
import { ServsComponent } from './client/servs/servs.component';
import { ActiveComponent } from './client/tabs/active/active.component';
import { HistoryComponent } from './client/tabs/history/history.component';
import { PendingComponent } from './client/tabs/pending/pending.component';

import { SpHomeComponent } from './service provider/sp-home/sp-home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ServsComponent,
    QuotationsComponent,
    PostsComponent,
    ElectriciansComponent,
    PlumbersComponent,
    PaintersComponent,
    MasonsComponent,
    ActiveComponent,
    PendingComponent,
    HistoryComponent,
    SpHomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
