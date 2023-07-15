'use strict';

/**
 * presenca service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::presenca.presenca');
