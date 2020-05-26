exports.up = (Knex) => {
  return Knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.boolean('provider').notNullable().defaultTo(false);

    table.timestamp('created_at').defaultTo(Knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(Knex.fn.now()).notNullable();
  });
};

exports.down = (Knex) => {
  return Knex.schema.dropTable('users');
};
