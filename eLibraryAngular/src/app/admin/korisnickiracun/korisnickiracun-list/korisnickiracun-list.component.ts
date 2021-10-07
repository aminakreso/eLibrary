import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { KorisnickiRacunService } from 'src/app/Shared/korisnickiracun/korisnickiracun.service';
import { KorisnickiRacun } from 'src/app/Shared/korisnickiracun/korisnickiracun.model';

@Component({
  selector: 'app-korisnickiracun-list',
  templateUrl: './korisnickiracun-list.component.html',
  styleUrls: ['./korisnickiracun-list.component.scss']
})
export class KorisnickiRacunListComponent implements OnInit {

  searchValueKorisnickiRacun: string='';
  listKorisnickiRacun!: KorisnickiRacun[];
  
  constructor(public service:KorisnickiRacunService,
  private toastr: ToastrService) { }

  ngOnInit(): void {

    this.service.refreshList();
  }

  populateForm(selectedRecord: KorisnickiRacun) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Da li ste sigurni da zelite obrisati korisnicki racun?')) {
      this.service.deleteKorisnickiRacunDetail(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Uspjesno obrisano!", 'Obavjestenje');
          },
          err => { console.log(err) }
        )
    }
  }



  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  

}
