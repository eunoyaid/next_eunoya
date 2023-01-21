'use strict';

/**
 * doa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::doa.doa');
