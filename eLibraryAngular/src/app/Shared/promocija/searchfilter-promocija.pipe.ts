import { Pipe, PipeTransform } from '@angular/core';
import { Promocija } from './promocija.model';


@Pipe({
  name: 'searchfilterPromocija'
})
export class SearchfilterPromocijaPipe implements PipeTransform {

  transform(item :Promocija[],searchValuePromocija:string): any {
    
    
    if(!item||!searchValuePromocija)
    {
      return item;
    }
    else
    {
    return item.filter(items=>
      items.naziv.toLocaleLowerCase().includes(searchValuePromocija.toLocaleLowerCase())||
      items.vrstaPromocije.toLocaleLowerCase().includes(searchValuePromocija.toLocaleLowerCase()));
    }
  }
}
