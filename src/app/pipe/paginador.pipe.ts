import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginador'
})
export class PaginadorPipe implements PipeTransform {

  transform(arrayPagina: number[], pageNumber:number = 0) {
    if(pageNumber>0){
      return arrayPagina.slice(pageNumber-1, pageNumber + 3);
    }else{
      return arrayPagina.slice(pageNumber, pageNumber + 4);
    }

  }

}
