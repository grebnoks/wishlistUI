import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule, MatButtonModule, MatGridListModule, MatInputModule, MatExpansionModule} from '@angular/material';
import {NgxsModule} from '@ngxs/store';
import {GiftListState} from './state/giftList.state';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([GiftListState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
