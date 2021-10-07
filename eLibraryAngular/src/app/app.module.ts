import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { KnjigaService } from './Shared/knjiga/knjiga.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import {HttpClientModule,HttpClient} from '@angular/common/http';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap'




import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
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
import { SearchfilterZanrPipe } from './Shared/zanr/SearchFilter/searchfilterZanr.pipe';
import { SearchfilterUplataPipe } from './Shared/uplata/searchfilter-uplata.pipe';
import { SearchfilterKnjigaPipe } from './Shared/knjiga/searchfilter-knjiga.pipe';
import { ClanskakartaListComponent } from './admin/clanskakarta/clanskakarta-list/clanskakarta-list.component';
import { ClanskakartaDetailFormComponent } from './admin/clanskakarta/clanskakarta-list/clanskakarta-detail-form/clanskakarta-detail-form.component';
import { SearchfilterClanskakartaPipe } from './Shared/clanskakarta/searchfilter-clanskakarta.pipe';
import { KnjigaListComponent } from './admin/knjiga/knjiga-list/knjiga-list.component';
import { KnjigaDetailFormComponent } from './admin/knjiga/knjiga-list/knjiga-detail-form/knjiga-detail-form.component';
import { PisacListComponent } from './admin/pisac/pisac-list/pisac-list.component';
import { PisacDetailFormComponent } from './admin/pisac/pisac-list/pisac-detail-form/pisac-detail-form.component';
import { SearchfilterPisacPipe } from './Shared/pisac/SearchFilter/searchfilterPisac.pipe';
import { PromocijaService } from './Shared/promocija/promocija.service';
import { SearchfilterPromocijaPipe } from './Shared/promocija/searchfilter-promocija.pipe';
import { PromocijaListComponent } from './admin/promocija/promocija-list/promocija-list.component';
import { PromocijaDetailFormComponent } from './admin/promocija/promocija-list/promocija-detail-form/promocija-detail-form.component';
import { PisacService } from './Shared/pisac/pisac.service';
import { UplataService } from './Shared/uplata/uplata.service';
import { SearchfilterKorisnikPipe } from './Shared/korisnik/SearchFilter/searchfilterKorisnik.pipe';
import { KorisnikService } from './Shared/korisnik/korisnik.service';
import { KorisnikListComponent } from './admin/korisnik/korisnik-list/korisnik-list.component';
import { KorisnikDetailFormComponent } from './admin/korisnik/korisnik-list/korisnik-detail-form/korisnik-detail-form.component';
import { KorisnickiRacunListComponent } from './admin/korisnickiracun/korisnickiracun-list/korisnickiracun-list.component';
import { KorisnickiRacunDetailFormComponent } from './admin/korisnickiracun/korisnickiracun-list/korisnickiracun-detail-form/korisnickiracun-detail-form.component';
import { KorisnickiRacunService } from './Shared/korisnickiracun/korisnickiracun.service';
import { SearchfilterKorisnickiRacunPipe } from './Shared/korisnickiracun/SearchFilter/searchfilterKorisnickiRacun.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchfilterPisacPipe,
    SearchfilterClanskakartaPipe,
    SearchfilterKnjigaPipe,
    SearchfilterUplataPipe,
    SearchfilterZanrPipe,
    SearchfilterPromocijaPipe,
    SearchfilterKorisnikPipe,
    SearchfilterKorisnickiRacunPipe,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    ZanrListComponent,ZanrDetailFormComponent,
    ClanskakartaListComponent,ClanskakartaDetailFormComponent,
    UplataListComponent,UplataDetailFormComponent,
    KnjigaListComponent,KnjigaDetailFormComponent,
    PisacListComponent,PisacDetailFormComponent,
    PromocijaListComponent, PromocijaDetailFormComponent,
    KorisnikListComponent,KorisnikDetailFormComponent,
    KorisnickiRacunListComponent, KorisnickiRacunDetailFormComponent
    
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
  providers: [HttpClientModule, KnjigaService, PromocijaService, PisacService, ZanrService, UplataService, KorisnikService, KorisnickiRacunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
