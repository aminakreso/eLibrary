import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClanskaKarta } from './clanskakarta.model';


@Injectable({
  providedIn: 'root'
})
export class ClanskakartaService {

  
  constructor(private http: HttpClient) { }
  
  readonly baseURL = 'https://localhost:44314/api/clanskaKartica';
  formData: ClanskaKarta = new ClanskaKarta();
  list!: ClanskaKarta[];

  postClanskakartaDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putClanskakartaDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.clanskaKarticaId}`, this.formData);
  }

  deleteClanskakartaDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as ClanskaKarta[]);
  }
  getAllClanskakarta():Observable<ClanskaKarta[]>{
    return this.http.get<ClanskaKarta[]>(this.baseURL);
  }
  
  
 
 
}

