'use strict';

module.exports = {
    method: 'GET',
    path: '/heroes',
    options: {
        handler: (request, h) => {

            const { Hero } = request.models();


            const heroes = Hero.query();

            const { name } = request.query;

            if (name) {

                const foundHeroes = heroes.filter((hero) => hero.name.indexOf(name) === -1);
                return foundHeroes;
            }

            return heroes;
        }
    }
};
