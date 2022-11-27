import { Pipe, PipeTransform } from '@angular/core';
import { ProductosDto } from '../dto/productos-dto';

@Pipe({
  name: 'productosPipe'
})
export class ProductosPipePipe implements PipeTransform {

  transform(productDto: ProductosDto[], pageNumber:number = 0, search:string=""):ProductosDto[] {
    if (search.length === 0){
      return productDto.slice(pageNumber, pageNumber + 2);
    }else{
      const filtroProducto = productDto.filter(pro => pro.nombre?.includes(search));
      return filtroProducto.slice(pageNumber, pageNumber + 2);
    }

  }

}
