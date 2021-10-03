import { Pipe, PipeTransform } from '@angular/core';
import { Knjiga } from './knjiga.model';



@Pipe({
  name: 'searchfilterKnjiga'
})
export class SearchfilterKnjigaPipe implements PipeTransform {

  transform(item :Knjiga[],searchValueKnjiga:string): any {
    
    
    if(!item||!searchValueKnjiga)
    {
      return item;
    }
    else
    {
    return item.filter(items=>
      
      items.nazivKnjige.toString().toLocaleLowerCase().includes(searchValueKnjiga.toLocaleLowerCase()));
    }
  }
}
