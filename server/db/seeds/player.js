export async function seed(knex) {
  await knex('player').del()

  await knex('player').insert([
    { id: 1, name: 'Bob', score: 50, time_taken: '', gamemode_id: 1 },
  ])
}
