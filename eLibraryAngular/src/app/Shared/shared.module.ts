import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchfilterUplataPipe } from './uplata/searchfilter-uplata.pipe';
import { SearchfilterKnjigaPipe } from './knjiga/searchfilter-knjiga.pipe';
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
    SearchfilterKnjigaPipe
  ],
})
export class SharedModule { }
