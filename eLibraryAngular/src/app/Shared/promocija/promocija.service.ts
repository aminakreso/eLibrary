import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promocija } from './promocija.model';


@Injectable({
  providedIn: 'root'
})
export class PromocijaService {

  
  constructor(private http: HttpClient) { }
  
  
  readonly baseURL = 'https://localhost:44314/api/promocija';
  formData: Promocija = new Promocija();
  list!: Promocija[];

  postPromocijaDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPromocijaDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.promocijaId}`, this.formData);
  }

  deletePromocijaDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Promocija[]);
  }
  
  
  getAllPromocija():Observable<Promocija[]>{
    return this.http.get<Promocija[]>(this.baseURL);
  }
  
 
 
}

