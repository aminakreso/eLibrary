import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Uplata } from 'src/app/Shared/uplata/uplata.model';
import { UplataService } from 'src/app/Shared/uplata/uplata.service';

@Component({
  selector: 'app-uplata-list',
  templateUrl: './uplata-list.component.html',
  styleUrls: ['./uplata-list.component.scss']
})
export class UplataListComponent implements OnInit {

  searchValueUplata: string='';
  
  
  listUplata!: Uplata[];
  constructor(public service:UplataService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.service.refreshList();
    
  }

  populateForm(selectedRecord: Uplata) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Da li ste sigurni da zelite obrisati uplatu?')) {
      this.service.deleteUplataDetail(id)
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
