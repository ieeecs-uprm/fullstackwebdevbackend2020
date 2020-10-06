'use strict';

module.exports = {
    method: 'PUT',
    path: '/heroes',
    options: {
        handler: async (request, h) => {

            const { Hero } = request.models();
            const hero = request.payload;
            const numUpdated = await Hero.query()
                .findById(hero.id)
                .patch({
                    ...hero
                });
            console.log(numUpdated);
            return hero;
        }
    }
};
