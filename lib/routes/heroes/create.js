'use strict';

module.exports = {
    method: 'POST',
    path: '/heroes',
    options: {
        handler: (request, h) => {

            return { hero: request.payload.hero };
        }
    }
};
