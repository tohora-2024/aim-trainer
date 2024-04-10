export async function seed(knex) {
  await knex('player').del()

  await knex('player').insert([
    { id: 1, name: 'Joel', score: 1, time_taken: '', gamemode_id: 1 },
    { id: 2, name: 'Jess', score: 10, time_taken: '', gamemode_id: 1 },
    { id: 3, name: 'Boston', score: 20, time_taken: '', gamemode_id: 1 },
  ])
}
