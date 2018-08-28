import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { ZadaniaComponent } from './zadania/zadania.component';
import { KsiazkiComponent } from './ksiazki/ksiazki.component';
import { WiedzaComponent } from './wiedza/wiedza.component';
import { ZdjeciaComponent } from './zdjecia/zdjecia.component';

import { environment } from '../environments/environment';

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
    AngularFireModule.initializeApp(environment.firebase, 'fcc-book-trading'),
    AngularFireDatabaseModule,
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
