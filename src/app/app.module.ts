import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// https://github.com/dougludlow/ng2-bs3-modal
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent }  from './app.component';
import { NavComponent }  from './_main/nav/nav.component';
import { DashComponent }  from './_main/dash/dash.component';

@NgModule({
  imports:      [ BrowserModule,Ng2Bs3ModalModule,FormsModule ],
  declarations: [ AppComponent,NavComponent,DashComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
