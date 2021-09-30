import { Component, OnInit } from '@angular/core';
import { KnjigaService } from 'src/app/Shared/knjiga/knjiga.service';
import { Knjiga } from 'src/app/Shared/knjiga/knjiga.model'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-knjiga',
  templateUrl: './knjige-list.component.html',
  styleUrls: ['./knjige-list.component.css']
})


export class KnjigeListComponent implements OnInit {

  searchValue: string='';
  listKnjiga!: Knjiga[];
  constructor(private knjigaService:KnjigaService) { }

  ngOnInit(): void {
    this.getKnjiga();
    
  }
  getKnjiga(): void {
    this.knjigaService.getAllKnjiga()
        .subscribe(books => this.listKnjiga = books);
  }
  
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
