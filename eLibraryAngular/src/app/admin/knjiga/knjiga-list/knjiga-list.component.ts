import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { Knjiga } from 'src/app/Shared/knjiga/knjiga.model';
import { KnjigaService } from 'src/app/Shared/knjiga/knjiga.service';



@Component({
  selector: 'app-knjiga-list',
  templateUrl: './knjiga-list.component.html',
  styleUrls: ['./knjiga-list.component.scss']
})
export class KnjigaListComponent implements OnInit {

  searchValueKnjiga: string='';
  
  
  listKnjiga!: Knjiga[];
  constructor(public service:KnjigaService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.service.refreshList();
    
  }

  populateForm(selectedRecord: Knjiga) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Da li ste sigurni da zelite obrisati knjigu?')) {
      this.service.deleteKnjigaDetail(id)
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
