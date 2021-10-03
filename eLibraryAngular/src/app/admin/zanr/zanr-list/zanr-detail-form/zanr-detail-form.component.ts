import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Zanr } from 'src/app/Shared/zanr/zanr.model';
import { ZanrService } from 'src/app/Shared/zanr/zanr.service';

@Component({
  selector: 'app-zanr-detail-form',
  templateUrl: './zanr-detail-form.component.html',
  styles: [
  ]
})
export class ZanrDetailFormComponent implements OnInit {

  constructor(public service: ZanrService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.zanrId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postZanrDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Uspjesno ste dodali zanr!', 'Obavjestenje')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putZanrDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Uspjesno ste uredili zanr!', 'Obavjestenje')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Zanr();
  }

}
