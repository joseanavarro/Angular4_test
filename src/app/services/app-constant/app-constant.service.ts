import { Injectable } from '@angular/core';

/**
 * Application constants
 *
 * @export
 * @class AppConstant
 */
@Injectable()
export class AppConstant {

  HTTP_TIMEOUT = 8000;  // Milliseconds

  DAT_URL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

}
