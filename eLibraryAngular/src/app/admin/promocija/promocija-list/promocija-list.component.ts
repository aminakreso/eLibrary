import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { PromocijaService } from 'src/app/Shared/promocija/promocija.service';
import { Promocija } from 'src/app/Shared/promocija/promocija.model';

@Component({
  selector: 'app-promocija-list',
  templateUrl: './promocija-list.component.html',
  styleUrls: ['./promocija-list.component.scss']
})
export class PromocijaListComponent implements OnInit {

  searchValuePromocija: string='';
  listPromocija!: Promocija[];
  show:boolean=false;
  
  constructor(public service:PromocijaService,
  private toastr: ToastrService) { }

  ngOnInit(): void {

    this.service.refreshList();
  }

  populateForm(selectedRecord: Promocija) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Da li ste sigurni da zelite obrisati promociju?')) {
      this.service.deletePromocijaDetail(id)
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
