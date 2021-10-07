import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Narudzba } from './narudzba.model';


@Injectable({
  providedIn: 'root'
})
export class NarudzbaService {

  
  constructor(private http: HttpClient) { }
  
  readonly baseURL = 'https://localhost:44314/api/narudzba';
  formData: Narudzba = new Narudzba();
  list!: Narudzba[];

  postNarudzbaDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putNarudzbaDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.narudzbaId}`, this.formData);
  }

  deleteNarudzbaDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Narudzba[]);
  }
  getAllNarudzba():Observable<Narudzba[]>{
    return this.http.get<Narudzba[]>(this.baseURL);
  }

  
 
 
}

