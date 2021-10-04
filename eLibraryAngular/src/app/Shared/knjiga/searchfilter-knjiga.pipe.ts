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
      items.nazivKnjige.toLocaleLowerCase().includes(searchValueKnjiga.toLocaleLowerCase())||
      items.pisac.ime.toLocaleLowerCase().includes(searchValueKnjiga.toLocaleLowerCase())||
      items.pisac.prezime.toLocaleLowerCase().includes(searchValueKnjiga.toLocaleLowerCase()));
    }
  }
}
