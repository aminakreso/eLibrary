import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promocija } from './promocija.model';


@Injectable({
  providedIn: 'root'
})
export class PromocijaService {

  url='https://localhost:44314/api/promocija'
  constructor(private http: HttpClient) { }
  
  
  
  getAllPromocija():Observable<Promocija[]>{
    return this.http.get<Promocija[]>(this.url);
  }
  
 
 
}

