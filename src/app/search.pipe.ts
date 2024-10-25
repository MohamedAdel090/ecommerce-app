import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
          /// products---->[{}, {}, {}] 
          ///[item ,item ,item]
  transform(products:any[] , term:string): any[] {

                            ///Hamada ----> hamada

    return products.filter( (item)=> item.title.toLowerCase().includes(term.toLowerCase()) )  ; 
  }

}
