import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { KnjigaService } from './Shared/knjiga/knjiga.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import {HttpClientModule,HttpClient} from '@angular/common/http';
import { SearchfilterPipe } from './Shared/SearchFilter/searchfilter.pipe';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { KnjigeListComponent } from './user/knjiga/knjige-list/knjige-list.component';
import { PromocijaService } from './Shared/promocija/promocija.service';
import { PromocijeListComponent } from './user/promocija/promocije-list/promocije-list.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    
    SearchfilterPipe,
    KnjigeListComponent,
    PromocijeListComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,

    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,

  ],
  providers: [HttpClientModule,KnjigaService,PromocijaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
