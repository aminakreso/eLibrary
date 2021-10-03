import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Uplata } from 'src/app/Shared/uplata/uplata.model';
import { UplataService } from 'src/app/Shared/uplata/uplata.service';


@Component({
  selector: 'app-uplata-detail-form',
  templateUrl: './uplata-detail-form.component.html',
  styles: [
  ]
})
export class UplataDetailFormComponent implements OnInit {

  constructor(public service: UplataService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.uplataId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postUplataDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Uspjesno ste dodali uplatu!', 'Obavjestenje')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putUplataDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Uspjesno ste uredili uplatu!', 'Obavjestenje')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Uplata();
  }

}
