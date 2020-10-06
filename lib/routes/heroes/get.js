'use strict';

const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');

module.exports = {
    method: 'GET',
    path: '/heroes/{id}',
    options: {
        validate: {
            params: Joi.object({
                id: Joi.number().required().description('Id of the hero')
            })
        },
        handler: async (request, h) => {

            const { id } = request.params;

            const { Hero } = request.models();
            const foundHero = await Hero.query().findById(id);

            if (!foundHero) {

                return Boom.notFound('Hero not found');
            }

            return foundHero;
        }
    }
};
