import { Pipe, PipeTransform } from '@angular/core';
import { Promocija } from '../promocija.model';

@Pipe({
  name: 'searchfilterPromocija'
})
export class SearchfilterPromocijaPipe implements PipeTransform {

  transform(item :Promocija[],searchValue:string): any {
    
    
    if(!item||!searchValue)
    {
      return item;
    }
    else
    {
    return item.filter(items=>
      
      items.naziv.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      items.vrstaPromocije.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }
}


  

  


