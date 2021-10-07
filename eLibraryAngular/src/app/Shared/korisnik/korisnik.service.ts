import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Korisnik } from './korisnik.model';


@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  
  constructor(private http: HttpClient) { }
  
  readonly baseURL = 'https://localhost:44314/api/korisnik';
  formData: Korisnik = new Korisnik();
  list!: Korisnik[];

  postKorisnikDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putKorisnikDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.korisnikId}`, this.formData);
  }

  deleteKorisnikDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Korisnik[]);
  }
  getAllKorisnik():Observable<Korisnik[]>{
    return this.http.get<Korisnik[]>(this.baseURL);
  }

  
 
 
}

