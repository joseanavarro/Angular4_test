import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ImgCacheModule } from 'ng-imgcache';
import { AppComponent } from './app.component';
import { HabItemComponent } from './components/hab-item/hab-item.component';
import { HomeComponent } from './components/home/home.component';
import { SearchTextPipe } from './pipes/search-text.pipe';
import { AppConstant } from './services/app-constant/app-constant.service';
import { GnomesService } from './services/gnomes/gnomes.service';

@NgModule({
  declarations: [
    AppComponent,
    HabItemComponent,
    HomeComponent,
    SearchTextPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ImgCacheModule,
    FormsModule
  ],
  providers: [
    GnomesService,
    AppConstant
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
