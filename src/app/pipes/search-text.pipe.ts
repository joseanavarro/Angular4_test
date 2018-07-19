import { Pipe, PipeTransform } from '@angular/core';
import { HabItem } from '../models/HabItem';

@Pipe({
  name: 'searchText',
  pure: false
})
export class SearchTextPipe implements PipeTransform {

  transform(items: HabItem[], filter: HabItem): HabItem[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter((item: HabItem) => this.applyFilter(item, filter));
  }

  /**
 * Perform the filtering.
 *
 * @param {Book} book The book to compare to the filter.
 * @param {Book} filter The filter to apply.
 * @return {boolean} True if book satisfies filters, false if not.
 */
  applyFilter(hab: HabItem, filter: HabItem): boolean {
    for (const field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          try {
            if (hab[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
              return false;
            }
          } catch (error) {
            if (hab[field].toString().toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
              return false;
            }
          }
        } else if (typeof filter[field] === 'number') {
          if (hab[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
