import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { HabItem } from '../../models/HabItem';
import { GnomesService } from '../../services/gnomes/gnomes.service';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent implements OnInit {

  Gnomes: HabItem[];
  loading: boolean = true;
  haserror: boolean = false;

  constructor(
    private gnomes: GnomesService
  ) { }

  /**
   *
   *
   * @memberof HomeButtonComponent
   */
  ngOnInit() {

    // Download gnome data on init
    this.gnomes.getGnomeData()
      .then(() => {
        this.loading = false;
        console.log('Data loaded');
      }, () => {
        this.loading = false;
        this.haserror = true;
        console.log('Error');
      });

  }

  /**
   * Show gnome list
   *
   * @memberof HomeButtonComponent
   */
  showList() {
    // Get the full list of gnomes
    this.Gnomes = this.gnomes.getAllGnomes();
  }

}
