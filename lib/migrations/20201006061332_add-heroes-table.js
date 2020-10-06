'use strict';

exports.up = async (knex) => {

    await knex.schema.createTable('heroes', (table) => {

        table.increments('id').primary();
        table.string('name').notNullable();
    });
};

exports.down = async (knex) => {

    await knex.schema.dropTable('heroes');
};

