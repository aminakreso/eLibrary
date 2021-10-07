import { Pipe, PipeTransform } from '@angular/core';
import { KorisnickiRacun } from '../korisnickiracun.model';

@Pipe({
  name: 'searchfilterKorisnickiRacun'
})
export class SearchfilterKorisnickiRacunPipe implements PipeTransform {

  transform(item :KorisnickiRacun[],searchValue:string): any {
    
    
    if(!item||!searchValue)
    {
      return item;
    }
    else
    {
    return item.filter(items=>
      
      items.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }
}


  

  


