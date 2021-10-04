import { Pipe, PipeTransform } from '@angular/core';
import { Pisac } from '../pisac.model';

@Pipe({
  name: 'searchfilterPisac'
})
export class SearchfilterPisacPipe implements PipeTransform {

  transform(item :Pisac[],searchValue:string): any {
    
    
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


  

  


