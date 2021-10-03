import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zanr } from './zanr.model';


@Injectable({
  providedIn: 'root'
})
export class ZanrService {

  
  constructor(private http: HttpClient) { }
  
  readonly baseURL = 'https://localhost:44314/api/zanr';
  formData: Zanr = new Zanr();
  list!: Zanr[];

  postZanrDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putZanrDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.zanrId}`, this.formData);
  }

  deleteZanrDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Zanr[]);
  }
  getAllZanr():Observable<Zanr[]>{
    return this.http.get<Zanr[]>(this.baseURL);
  }

  
 
 
}

