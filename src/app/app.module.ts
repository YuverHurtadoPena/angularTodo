import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { ProductosPipePipe } from './pipe/productos-pipe.pipe';
import { PaginadorPipe } from './pipe/paginador.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    ProductosPipePipe,
    PaginadorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
