import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchfilterUplataPipe } from './uplata/searchfilter-uplata.pipe';
import { SearchfilterKnjigaPipe } from './knjiga/searchfilter-knjiga.pipe';
import { SearchfilterPromocijaPipe } from './promocija/SearchFilter/searchfilterPromocija.pipe';
import { SearchfilterClanskakartaPipe } from './clanskakarta/searchfilter-clanskakarta.pipe';
import { SearchfilterPisacPipe } from './pisac/SearchFilter/searchfilterPisac.pipe';
import { SearchfilterZanrPipe } from './zanr/SearchFilter/searchfilterZanr.pipe';
import { SearchfilterKorisnikPipe } from './korisnik/SearchFilter/searchfilterKorisnik.pipe';
import { SearchfilterKorisnickiRacunPipe } from './korisnickiracun/SearchFilter/searchfilterKorisnickiRacun.pipe';
import { SearchfilterNarudzbaPipe } from './narudzba/SearchFilter/searchfilterNarudzba.pipe';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchfilterUplataPipe,
    SearchfilterKnjigaPipe,
    SearchfilterPromocijaPipe,
    SearchfilterClanskakartaPipe,
    SearchfilterPisacPipe,
    SearchfilterZanrPipe, 
    SearchfilterKorisnikPipe,
    SearchfilterKorisnickiRacunPipe,
    SearchfilterNarudzbaPipe
  ],
})
export class SharedModule { }
