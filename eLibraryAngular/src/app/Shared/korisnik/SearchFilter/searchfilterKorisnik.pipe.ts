import { Pipe, PipeTransform } from '@angular/core';
import { Korisnik } from '../korisnik.model';

@Pipe({
  name: 'searchfilterKorisnik'
})
export class SearchfilterKorisnikPipe implements PipeTransform {

  transform(item :Korisnik[],searchValue:string): any {
    
    
    if(!item||!searchValue)
    {
      return item;
    }
    else
    {
    return item.filter(items=>
      
      items.ime.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      items.prezime.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }
}


  

  


