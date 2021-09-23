import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Knjiga } from './knjiga.model';


@Injectable({
  providedIn: 'root'
})
export class KnjigaService {

  url='https://localhost:44314/api/knjiga'
  constructor(private http: HttpClient) { }
  
  
  
  getAllKnjiga():Observable<Knjiga[]>{
    return this.http.get<Knjiga[]>(this.url);
  }
}

