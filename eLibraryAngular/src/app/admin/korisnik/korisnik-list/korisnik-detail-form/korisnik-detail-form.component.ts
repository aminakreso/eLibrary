import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Korisnik} from 'src/app/Shared/korisnik/korisnik.model';
import { KorisnikService } from 'src/app/Shared/korisnik/korisnik.service';


@Component({
  selector: 'app-korisnik-detail-form',
  templateUrl: './korisnik-detail-form.component.html',
  styles: [
  ]
})
export class KorisnikDetailFormComponent implements OnInit {

  constructor(public service: KorisnikService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.korisnikId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postKorisnikDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Uspjesno ste dodali korisnika!', 'Obavjestenje')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putKorisnikDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Uspjesno ste uredili korisnika!', 'Obavjestenje')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Korisnik();
  }

}
