import { bootstrapApplication } from '@angular/platform-browser';
import { PedidoComponent } from './app/components/pedido/pedido.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(PedidoComponent, {
  providers: [importProvidersFrom(HttpClientModule)],
}).catch((err) => console.error(err));
