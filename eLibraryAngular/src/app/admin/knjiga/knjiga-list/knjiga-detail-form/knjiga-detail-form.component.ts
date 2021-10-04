
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { PisacDropdownVM } from 'src/app/PisacDropdownVM';
import { ZanrDropdownVM } from 'src/app/ZanrDropdownVM';
import { Knjiga } from 'src/app/Shared/knjiga/knjiga.model';
import { KnjigaService } from 'src/app/Shared/knjiga/knjiga.service';



@Component({
  selector: 'app-knjiga-detail-form',
  templateUrl: './knjiga-detail-form.component.html',
  styles: [
  ]
})
export class KnjigaDetailFormComponent implements OnInit {

  constructor(private http:HttpClient,public service: KnjigaService,
    private toastr: ToastrService) { }

  pisci!:PisacDropdownVM[];
  pisac!:PisacDropdownVM;

  zanrovi!:ZanrDropdownVM[];
  zanr!:ZanrDropdownVM;
    
  ngOnInit(): void {
    this.GetPisci();
    this.GetZanrovi();
  }
  GetPisci(){
    this.http.get<PisacDropdownVM[]>('https://localhost:44314/api/pisac').subscribe((result:PisacDropdownVM[])=>{
      this.pisci=result;
    });
  }
  GetZanrovi(){
    this.http.get<ZanrDropdownVM[]>('https://localhost:44314/api/zanr').subscribe((result:ZanrDropdownVM[])=>{
      this.zanrovi=result;
    });
  }
  

  onSubmit(form: NgForm) {
    if (this.service.formData.knjigaId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postKnjigaDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Uspjesno ste dodali knjigu!', 'Obavjestenje')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putKnjigaDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Uspjesno ste uredili knjigu!', 'Obavjestenje')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Knjiga();
  }

}
