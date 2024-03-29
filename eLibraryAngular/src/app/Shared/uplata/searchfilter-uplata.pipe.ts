import { Pipe, PipeTransform } from '@angular/core';
import { Uplata } from './uplata.model';


@Pipe({
  name: 'searchfilterUplata'
})
export class SearchfilterUplataPipe implements PipeTransform {

  transform(item :Uplata[],searchValueUplata:string): any {
    
    
    if(!item||!searchValueUplata)
    {
      return item;
    }
    else
    {
    return item.filter(items=>
      
      items.korisnik.ime.toLocaleLowerCase().includes(searchValueUplata.toLocaleLowerCase())||
      items.korisnik.prezime.toLocaleLowerCase().includes(searchValueUplata.toLocaleLowerCase()));
    }
  }
}
