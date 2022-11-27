import { Component, OnInit } from '@angular/core';
import { ProductosDto } from '../dto/productos-dto';
import { ProductosServiceService } from '../servicios/productos-service.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css'],
})
export class ListaProductoComponent implements OnInit {
  private productService: ProductosServiceService;

  paginaNumero = 0;
  paginatorNumber = 0;
  search = "";
  moverPagina:any;

  productDto: ProductosDto[] = [];
  arrayPagina: number[] = [];
  filter = 2;

  id = 0;
  mes = new Date().getMonth();
  dia = new Date().getDay();
  anno = new Date().getFullYear();
  hora = new Date().getHours();
  minuto = new Date().getMinutes();

  constructor(productService: ProductosServiceService) {
    this.productService = productService;
  }

  ngOnInit(): void {
    this.getAllProduct();

  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe({
      next: (data) => {
        this.productDto = data;
        this.cantidadPagina(this.productDto);

      },
    });

  }

  loadProduct(event: Event) {
    this.filter = Number((<HTMLSelectElement>event.target).value);
    if (this.filter != 3) {
      this.productService.getListSearchedProduct(this.filter).subscribe({
        next: (data) => {
          this.productDto = data;
          this.cantidadPagina(this.productDto);
        },
      });
    } else {
      this.getAllProduct();
    }
  }

/*---------------------BEGAN PAGINATOR-------------------------*/

  cantidadPagina(productDto: ProductosDto[]){
    let i = 0;
    this.arrayPagina = [];
    console.log(this.productDto.length/2)

    if(this.productDto.length/2 > 0){
      for(i; i<this.productDto.length/2; i++){
        this.arrayPagina.push(i);
      }
    }

  }
  movePaginator(ca:any){

      this.paginaNumero = ca*2;
      this.paginatorNumber = ca;

  }
  nextPage(){
    this.paginaNumero += 2;
    this.paginatorNumber +=1;
    console.log(this.paginaNumero )
  }

  buscarProducto(buscarbyName: string){
    this.paginaNumero =0;
    this.search = buscarbyName;

  }

  backPage(){
    if( this.paginaNumero >0){
      this.paginaNumero -= 2;
      this.paginatorNumber -=1;
    }

  }

  /*---------------------END PAGINATOR-------------------------*/
}
