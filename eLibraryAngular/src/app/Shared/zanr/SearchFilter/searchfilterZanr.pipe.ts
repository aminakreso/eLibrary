import { Pipe, PipeTransform } from '@angular/core';
import { Zanr } from '../zanr.model';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterZanrPipe implements PipeTransform {

  transform(item :Zanr[],searchValue:string): any {
    
    
    if(!item||!searchValue)
    {
      return item;
    }
    else
    {
    return item.filter(items=>
      
      items.naziv.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }
}


  

  


