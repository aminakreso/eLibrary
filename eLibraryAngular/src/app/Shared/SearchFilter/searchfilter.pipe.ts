import { Pipe, PipeTransform } from '@angular/core';
import { Knjiga } from '../knjiga/knjiga.model'; 
@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Knjiga: Knjiga[],searchValue:string): any {
    if(!Knjiga||!searchValue)
    {
      return Knjiga;
    }
    return Knjiga.filter(knjiga=>
      knjiga.nazivKnjige.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      knjiga.pisacId.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      knjiga.zanrId.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
      
  }

}
