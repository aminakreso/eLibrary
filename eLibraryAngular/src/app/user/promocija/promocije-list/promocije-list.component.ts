import { Component, OnInit } from '@angular/core';
import { PromocijaService } from 'src/app/Shared/promocija/promocija.service';
import { Promocija } from 'src/app/Shared/promocija/promocija.model'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promocija',
  templateUrl: './promocije-list.component.html',
  styleUrls: ['./promocije-list.component.css']
})


export class PromocijeListComponent implements OnInit {

  searchValue: string='';
  listPromocija!: Promocija[];
  constructor(private promocijaService:PromocijaService) { }

  ngOnInit(): void {
    this.getPromocija();
    
  }
  getPromocija(): void {
    this.promocijaService.getAllPromocija()
        .subscribe(promocija => this.listPromocija = promocija);
  }
  
  

}
