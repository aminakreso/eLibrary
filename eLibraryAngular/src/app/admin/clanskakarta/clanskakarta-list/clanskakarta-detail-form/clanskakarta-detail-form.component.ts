
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';



import { KorisnikDropdownVM } from 'src/app/KorisnikDropdownVM';
import { ClanskaKarta } from 'src/app/Shared/clanskakarta/clanskakarta.model';
import { ClanskakartaService } from 'src/app/Shared/clanskakarta/clanskakarta.service';


@Component({
  selector: 'app-clanskakarta-detail-form',
  templateUrl: './clanskakarta-detail-form.component.html',
  styles: [
  ]
})
export class ClanskakartaDetailFormComponent implements OnInit {

  constructor(private http:HttpClient,public service: ClanskakartaService,
    private toastr: ToastrService) { }

  korisnici!:KorisnikDropdownVM[];
  korisnik!:KorisnikDropdownVM;
    
  ngOnInit(): void {
    this.GetKorisnici();
  }
  GetKorisnici(){
    this.http.get<KorisnikDropdownVM[]>('https://localhost:44314/api/korisnik').subscribe((result:KorisnikDropdownVM[])=>{
      this.korisnici=result;
    });
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.clanskaKarticaId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postClanskakartaDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Uspjesno ste dodali clansku kartu!', 'Obavjestenje')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putClanskakartaDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Uspjesno ste uredili clansku kartu!', 'Obavjestenje')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new ClanskaKarta();
  }

}
