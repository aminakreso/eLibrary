import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { KorisnickiRacun } from './korisnickiracun.model';


@Injectable({
  providedIn: 'root'
})
export class KorisnickiRacunService {

  
  constructor(private http: HttpClient) { }
  
  readonly baseURL = 'https://localhost:44314/api/korisnickiracun';
  formData: KorisnickiRacun = new KorisnickiRacun();
  list!: KorisnickiRacun[];

  postKorisnickiRacunDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putKorisnickiRacunDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.korisnickiracunId}`, this.formData);
  }

  deleteKorisnickiRacunDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as KorisnickiRacun[]);
  }
  getAllKorisnickiRacun():Observable<KorisnickiRacun[]>{
    return this.http.get<KorisnickiRacun[]>(this.baseURL);
  }

  
 
 
}

