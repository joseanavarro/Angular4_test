import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { HabItem } from '../../models/HabItem';
import { GnomesService } from '../../services/gnomes/gnomes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Gnomes: HabItem[];
  Gnome: HabItem;
  loading = true;
  haserror = false;
  showtable = false;
  counter: number;
  detailView = false;

  // filter The object containing the filter values to apply to gnomefilter
  filter: HabItem = new HabItem();

  constructor(private gnomes: GnomesService) { }

  /**
   *
   *
   * @memberof HomeComponent
   */
  ngOnInit() {

    // Download gnome data on init
    this.gnomes.getGnomeData()
      .then(() => {
        this.loading = false;
        console.log('Data loaded');
        this.Gnomes = this.gnomes.getAllGnomes();
        this.showtable = true;
      }, () => {
        this.loading = false;
        this.haserror = true;
        console.log('Error');
      });

  }

  /**
   * Show gnome list
   *
   * @memberof HomeComponent
   */
  showList() {
    // Get the full list of gnomes
    this.Gnomes = this.gnomes.getAllGnomes();
    this.showtable = true;
  }

  /**
   * Show gnome details
   *
   * @param {*} i
   * @memberof HomeComponent
   */
  showGnome(i: any): void {

    this.Gnome = this.gnomes.getGnome(i);
    this.detailView = true;
  }

  /**
   * set the number of displeyd results
   *
   * @param {*} count
   * @memberof HomeComponent
   */
  setCounter(count) {
    this.counter = count;
  }

  /**
   * Close detail view
   *
   * @memberof HomeComponent
   */
  closeDetail() {
    this.detailView = false;
  }

}
