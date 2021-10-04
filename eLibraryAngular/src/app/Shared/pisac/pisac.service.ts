import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pisac } from './pisac.model';


@Injectable({
  providedIn: 'root'
})
export class PisacService {

  
  constructor(private http: HttpClient) { }
  
  readonly baseURL = 'https://localhost:44314/api/pisac';
  formData: Pisac = new Pisac();
  list!: Pisac[];

  postPisacDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPisacDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.pisacId}`, this.formData);
  }

  deletePisacDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Pisac[]);
  }
  getAllPisac():Observable<Pisac[]>{
    return this.http.get<Pisac[]>(this.baseURL);
  }

  
 
 
}

