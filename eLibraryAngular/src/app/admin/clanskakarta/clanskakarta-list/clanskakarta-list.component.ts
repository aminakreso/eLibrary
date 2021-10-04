import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ClanskaKarta } from 'src/app/Shared/clanskakarta/clanskakarta.model';
import { ClanskakartaService } from 'src/app/Shared/clanskakarta/clanskakarta.service';



@Component({
  selector: 'app-clanskakarta-list',
  templateUrl: './clanskakarta-list.component.html',
  styleUrls: ['./clanskakarta-list.component.scss']
})
export class ClanskakartaListComponent implements OnInit {

  searchValueClanskakarta: string='';
  
  
  listClanskakarta!: ClanskaKarta[];
  constructor(public service:ClanskakartaService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.service.refreshList();
    
  }

  populateForm(selectedRecord: ClanskaKarta) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Da li ste sigurni da zelite obrisati clansku kartu?')) {
      this.service.deleteClanskakartaDetail(id)
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
