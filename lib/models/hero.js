'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');

module.exports = class Hero extends Schwifty.Model {

    static get tableName() {

        return 'heroes';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer(),
            name: Joi.string()
        });
    }
};
