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





@NgModule({
  declarations: [
    AppComponent,
    
    SearchfilterPipe,
    KnjigeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [HttpClientModule,KnjigaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
