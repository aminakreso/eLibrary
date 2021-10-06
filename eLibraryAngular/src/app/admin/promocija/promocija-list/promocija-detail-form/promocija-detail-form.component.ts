
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Promocija } from 'src/app/Shared/promocija/promocija.model';
import { PromocijaService } from 'src/app/Shared/promocija/promocija.service';



@Component({
  selector: 'app-promocija-detail-form',
  templateUrl: './promocija-detail-form.component.html',
  styles: [
  ]
})
export class PromocijaDetailFormComponent implements OnInit {

  constructor(private http:HttpClient,public service: PromocijaService,
    private toastr: ToastrService) { }

  
    
  ngOnInit(): void {
    
  }
  
  

  onSubmit(form: NgForm) {
    if (this.service.formData.promocijaId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPromocijaDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Uspjesno ste dodali promociju!', 'Obavjestenje')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putPromocijaDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Uspjesno ste uredili promociju!', 'Obavjestenje')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Promocija();
  }

}
