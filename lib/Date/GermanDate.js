/**
 * internetmarke
 * Copyright (c) 2018 Manuel Schächinger
 * MIT Licensed
 */

'use strict';

const moment = require('moment-timezone');

const TIMEZONE = 'Europe/Berlin';

class GermanDate {
  /**
   * Format the current or given date to the format requested by the api.
   * 
   * @param {(Date|null)} [date] - The date that should be formatted.
   * @returns {string}
   */
  format(date) {
    date = date || new Date();
    return moment(date).tz(TIMEZONE).format('DDMMYYYY-HHmmss');
  }
}

module.exports = GermanDate;
