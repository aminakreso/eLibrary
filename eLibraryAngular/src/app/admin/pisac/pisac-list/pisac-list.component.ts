import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { PisacService } from 'src/app/Shared/pisac/pisac.service';
import { Pisac } from 'src/app/Shared/pisac/pisac.model';

@Component({
  selector: 'app-pisac-list',
  templateUrl: './pisac-list.component.html',
  styleUrls: ['./pisac-list.component.scss']
})
export class PisacListComponent implements OnInit {

  searchValuePisac: string='';
  listPisac!: Pisac[];
  constructor(public service:PisacService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.service.refreshList();
    
  }

  populateForm(selectedRecord: Pisac) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Da li ste sigurni da zelite obrisati pisca?')) {
      this.service.deletePisacDetail(id)
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
