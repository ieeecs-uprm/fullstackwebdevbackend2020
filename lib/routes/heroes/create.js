'use strict';

module.exports = {
    method: 'POST',
    path: '/heroes',
    options: {
        handler: async (request, h) => {

            const { Hero } = request.models();

            // We store our payload (the prospective new Riddle object)
            const hero = request.payload;

            // We try to add the POST'd riddle using Objection's insertAndFetch method (http://vincit.github.io/objection.js/#insertandfetch)
            // If that throws for any reason, hapi will reply with a 500 error for us, which we could customize better in the future.

            return await Hero.query().insertAndFetch(hero);
        }
    }
};
