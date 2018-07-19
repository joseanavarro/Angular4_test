import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/timeout';
import { Observable } from 'rxjs/Observable';
import { HabItem } from '../../models/HabItem';
import { AppConstant } from '../../services/app-constant/app-constant.service';

@Injectable()
export class GnomesService {

  Gnomes: HabItem[];

  constructor(
    private http: Http,
    private CN: AppConstant
  ) {
    // Load data
    this.getGnomeData();
  }

  // PRIVATE METHODS

  /**
   * Retrieve data from server
   *
   * @private
   * @returns {Observable<any>}
   * @memberof GnomesService
   */
  private downloadData(): Observable<any> {

    const listUrl: string = this.CN.DAT_URL;

    return this.http.get(listUrl)
      .map(response => response.json().Brastlewark);
  }

  // PUBLIC METHODS

  /**
   * Load gnome data into Gnomes
   *
   * @private
   * @memberof GnomesService
   */
  public getGnomeData(): Promise<any> {
    const ctx = this;

    return new Promise((resolve, reject) => {

      this.downloadData().subscribe((res) => {
        ctx.Gnomes = res;
        console.log('Received:' + ctx.Gnomes[0].name);
        resolve();
      }, (err) => {
        console.error('Error: ' + err);
        reject();
      });

    });

  }


  /**
   * Return all gnomes
   *
   * @returns {HabItem[]}
   * @memberof GnomesService
   */
  public getAllGnomes(): HabItem[] {
    return this.Gnomes;
  }

  /**
   * Return a gnome defoined by index
   *
   * @param {*} i
   * @returns {HabItem}
   * @memberof GnomesService
   */
  public getGnome(i: any): HabItem {
    return this.Gnomes[i];
  }

}
