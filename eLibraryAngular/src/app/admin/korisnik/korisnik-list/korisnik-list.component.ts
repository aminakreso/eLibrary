import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { KorisnikService } from 'src/app/Shared/korisnik/korisnik.service';
import { Korisnik } from 'src/app/Shared/korisnik/korisnik.model';

@Component({
  selector: 'app-korisnik-list',
  templateUrl: './korisnik-list.component.html',
  styleUrls: ['./korisnik-list.component.scss']
})
export class KorisnikListComponent implements OnInit {

  searchValueKorisnik: string='';
  listKorisnik!: Korisnik[];
  
  constructor(public service:KorisnikService,
  private toastr: ToastrService) { }

  ngOnInit(): void {

    this.service.refreshList();
  }

  populateForm(selectedRecord: Korisnik) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Da li ste sigurni da zelite obrisati korisnika?')) {
      this.service.deleteKorisnikDetail(id)
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
