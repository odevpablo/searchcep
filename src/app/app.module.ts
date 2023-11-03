import {BrowserModule} from '@angular/platform-browser';
import{NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { FooterComponentComponent } from './component/footer-component/footer-component.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
