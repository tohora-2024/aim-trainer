export async function up(knex) {
  return knex.schema.createTable('player', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('score')
    table.string('time_taken').nullable()
    table.integer('gamemode_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('player')
}
