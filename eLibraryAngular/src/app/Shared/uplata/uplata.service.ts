import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Uplata } from './uplata.model';


@Injectable({
  providedIn: 'root'
})
export class UplataService {

  
  constructor(private http: HttpClient) { }
  
  readonly baseURL = 'https://localhost:44314/api/uplata';
  formData: Uplata = new Uplata();
  list!: Uplata[];

  postUplataDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putUplataDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.uplataId}`, this.formData);
  }

  deleteUplataDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Uplata[]);
  }
  getAllUplata():Observable<Uplata[]>{
    return this.http.get<Uplata[]>(this.baseURL);
  }

  
 
 
}

