import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Knjiga } from './knjiga.model';


@Injectable({
  providedIn: 'root'
})
export class KnjigaService {

  
  constructor(private http: HttpClient) { }
  
  readonly baseURL = 'https://localhost:44314/api/knjiga';
  formData: Knjiga = new Knjiga();
  list!: Knjiga[];

  postKnjigaDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putKnjigaDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.knjigaId}`, this.formData);
  }

  deleteKnjigaDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Knjiga[]);
  }
  getAllKnjiga():Observable<Knjiga[]>{
    return this.http.get<Knjiga[]>(this.baseURL);
  }
  
  
 
 
}

