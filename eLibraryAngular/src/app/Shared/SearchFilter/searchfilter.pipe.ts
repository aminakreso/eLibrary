import { Pipe, PipeTransform } from '@angular/core';
import { Knjiga } from '../knjiga/knjiga.model';
import { Promocija } from '../promocija/promocija.model';
@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(item :any[],searchValue:string): any {
    
    
    if(!item||!searchValue)
    {
      return item;
    }
    else
    {
    return item.filter(items=>
      
      items.nazivKnjige.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      items.pisacId.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      items.zanrId.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
      
    
    }
  }
}


  

  


