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
import { CommonModule } from '@angular/common';
import { ZanrService } from './Shared/zanr/zanr.service';
import { ZanrListComponent } from './admin/zanr/zanr-list/zanr-list.component';
import { ToastrModule } from 'ngx-toastr';
import { ZanrDetailFormComponent } from './admin/zanr/zanr-list/zanr-detail-form/zanr-detail-form.component';
import { UplataDetailFormComponent } from './admin/uplata/uplata-list/uplata-detail-form/uplata-detail-form.component';
import { UplataListComponent } from './admin/uplata/uplata-list/uplata-list.component';





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
    ZanrListComponent,
    ZanrDetailFormComponent,
    
    UplataListComponent,UplataDetailFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    

  ],
  providers: [HttpClientModule,KnjigaService,PromocijaService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
