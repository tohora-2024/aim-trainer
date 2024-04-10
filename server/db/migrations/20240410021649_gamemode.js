export async function up(knex) {
  return knex.schema.createTable('gamemode', (table) => {
    table.increments('id')
    table.string('name')
    table.string('time_left')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('gamemode')
}
