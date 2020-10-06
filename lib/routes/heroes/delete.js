'use strict';

module.exports = {
    method: 'DELETE',
    path: '/heroes/{id}',
    options: {
        handler: (request, h) => {

            return h.response().code(204);
        }
    }
};
