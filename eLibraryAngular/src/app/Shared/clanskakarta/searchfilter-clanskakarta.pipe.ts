import { Pipe, PipeTransform } from '@angular/core';
import { ClanskaKarta } from './clanskakarta.model';


@Pipe({
  name: 'searchfilterClanskakarta'
})
export class SearchfilterClanskakartaPipe implements PipeTransform {

  transform(item :ClanskaKarta[],searchValueUplata:string): any {
    
    
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
