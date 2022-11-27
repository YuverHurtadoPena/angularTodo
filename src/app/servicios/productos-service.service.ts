import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosDto } from '../dto/productos-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {
  private httpClient: HttpClient;
  private urlGeneral = "http://localhost:8080/api/";

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }



  public getListSearchedProduct(id: number): Observable<ProductosDto[]> {
    return this.httpClient.get<ProductosDto[]>(
      `${this.urlGeneral}get_productos_baratos_Caros/${id}`
    );
  }


  public getAllProduct(): Observable<ProductosDto[]> {
    return this.httpClient.get<ProductosDto[]>(
      `${this.urlGeneral}listaProductos`
    );
  }
}
