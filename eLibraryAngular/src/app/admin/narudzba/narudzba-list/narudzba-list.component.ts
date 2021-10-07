import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { NarudzbaService } from 'src/app/Shared/narudzba/narudzba.service';
import { Narudzba } from 'src/app/Shared/narudzba/narudzba.model';

@Component({
  selector: 'app-narudzba-list',
  templateUrl: './narudzba-list.component.html',
  styleUrls: ['./narudzba-list.component.scss']
})
export class NarudzbaListComponent implements OnInit {

  searchValueNarudzba: string='';
  listNarudzba!: Narudzba[];
  show:boolean=false;
  
  constructor(public service:NarudzbaService,
  private toastr: ToastrService) { }

  ngOnInit(): void {

    this.service.refreshList();
  }

  populateForm(selectedRecord: Narudzba) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Da li ste sigurni da zelite obrisati narudžbu?')) {
      this.service.deleteNarudzbaDetail(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Uspjesno obrisano!", 'Obavjestenje');
          },
          err => { console.log(err) }
        )
    }
  }

  password() {
    this.show = !this.show;
}

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  

}
