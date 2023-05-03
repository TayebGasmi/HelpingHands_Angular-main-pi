import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientHeaderComponent} from './client-header/client-header.component';
import {ClientComponent} from './client.component';
import {ClientFooterComponent} from './client-footer/client-footer.component';


@NgModule({
  declarations: [
    ClientComponent,
    ClientHeaderComponent,
    ClientFooterComponent

  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule {
}
