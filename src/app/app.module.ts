import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ItemserviceService } from './itemservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    ItemserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
