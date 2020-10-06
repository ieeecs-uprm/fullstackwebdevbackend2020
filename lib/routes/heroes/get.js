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
        handler: (request, h) => {

            const heroes = [
                { id: 11, name: 'Dr Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
                { id: 15, name: 'Magneta' },
                { id: 16, name: 'RubberMan' },
                { id: 17, name: 'Dynama' },
                { id: 18, name: 'Dr IQ' },
                { id: 19, name: 'Magma' },
                { id: 20, name: 'Tornado' }
            ];

            const { id } = request.params;
            const foundHero  = heroes.find((hero) => hero.id === id);
            if (foundHero === undefined || foundHero === null) {

                return Boom.notFound('Hero not found');
            }

            return foundHero;
        }
    }
};
