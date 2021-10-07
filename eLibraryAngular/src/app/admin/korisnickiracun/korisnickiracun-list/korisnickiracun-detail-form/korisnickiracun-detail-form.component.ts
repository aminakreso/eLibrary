import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { KorisnickiRacun} from 'src/app/Shared/korisnickiracun/korisnickiracun.model';
import { KorisnickiRacunService } from 'src/app/Shared/korisnickiracun/korisnickiracun.service';


@Component({
  selector: 'app-korisnickiracun-detail-form',
  templateUrl: './korisnickiracun-detail-form.component.html',
  styles: [
  ]
})
export class KorisnickiRacunDetailFormComponent implements OnInit {

  constructor(public service: KorisnickiRacunService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.korisnickiracunId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postKorisnickiRacunDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Uspjesno ste dodali korisnicki račun!', 'Obavjestenje')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putKorisnickiRacunDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Uspjesno ste uredili korisnicki racun!', 'Obavjestenje')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new KorisnickiRacun();
  }

}
