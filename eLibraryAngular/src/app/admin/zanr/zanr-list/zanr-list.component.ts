import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ZanrService } from 'src/app/Shared/zanr/zanr.service';
import { Zanr } from 'src/app/Shared/zanr/zanr.model';

@Component({
  selector: 'app-zanr-list',
  templateUrl: './zanr-list.component.html',
  styleUrls: ['./zanr-list.component.scss']
})
export class ZanrListComponent implements OnInit {

  searchValue: string='';
  listZanr!: Zanr[];
  constructor(public service:ZanrService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.service.refreshList();
    
  }

  populateForm(selectedRecord: Zanr) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Da li ste sigurni da zelite obrisati zanr?')) {
      this.service.deleteZanrDetail(id)
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
