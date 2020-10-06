'use strict';

module.exports = {
    method: 'DELETE',
    path: '/heroes/{id}',
    options: {
        handler: async (request, h) => {

            const { Hero } = request.models();
            const { id } = request.params;
            const numDeleted = await Hero.query().deleteById(id);
            console.log(numDeleted);

            return h.response().code(204);
        }
    }
};
