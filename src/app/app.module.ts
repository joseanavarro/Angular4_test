import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HabItemComponent } from './components/hab-item/hab-item.component';
import { HomeButtonComponent } from './components/home-button/home-button.component';
import { AppConstant } from './services/app-constant/app-constant.service';
import { GnomesService } from './services/gnomes/gnomes.service';

@NgModule({
  declarations: [
    AppComponent,
    HabItemComponent,
    HomeButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    GnomesService,
    AppConstant
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
