import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServsComponent } from './servs/servs.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { PostsComponent } from './posts/posts.component';
import { ElectriciansComponent } from './jobs/electricians/electricians.component';
import { PlumbersComponent } from './jobs/plumbers/plumbers.component';
import { PaintersComponent } from './jobs/painters/painters.component';
import { MasonsComponent } from './jobs/masons/masons.component';

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
    MasonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
