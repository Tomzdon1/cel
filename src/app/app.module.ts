import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { ZadaniaComponent } from './zadania/zadania.component';
import { KsiazkiComponent } from './ksiazki/ksiazki.component';
import { WiedzaComponent } from './wiedza/wiedza.component';
import { ZdjeciaComponent } from './zdjecia/zdjecia.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    ZadaniaComponent,
    KsiazkiComponent,
    WiedzaComponent,
    ZdjeciaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'zadania', component : ZadaniaComponent},
      { path: 'ksiazki', component : KsiazkiComponent},
      { path: 'wiedza', component : WiedzaComponent},
      { path: 'zdjecia', component : ZdjeciaComponent},
      { path: '',   redirectTo: '/ksiazki', pathMatch: 'full' },
      { path: '**', component: KsiazkiComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
