import { Component } from '@angular/core';
import { ImgCacheService } from 'ng-imgcache';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gnomes of Brastlewark';

  constructor(imgCache: ImgCacheService) {

    // Initialize image cache
    imgCache.init({
      // Pass any options here...
    });

  }
}
