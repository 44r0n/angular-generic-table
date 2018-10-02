import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericTableComponent } from './generic-table/generic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
