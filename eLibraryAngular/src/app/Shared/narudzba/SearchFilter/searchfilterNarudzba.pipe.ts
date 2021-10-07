import { Pipe, PipeTransform } from '@angular/core';
import { Narudzba } from '../narudzba.model';

@Pipe({
  name: 'searchfilterNarudzba'
})
export class SearchfilterNarudzbaPipe implements PipeTransform {

  transform(item :Narudzba[],searchValue:string): any {
    
    
    if(!item||!searchValue)
    {
      return item;
    }
    else
    {
    return item.filter(items=>
      
      items.korisnikId.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }
}


  

  


