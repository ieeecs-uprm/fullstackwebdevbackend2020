'use strict';

module.exports = {
    method: 'PUT',
    path: '/heroes',
    options: {
        handler: (request, h) => {

            return { hero: request.payload.hero };
        }
    }
};
