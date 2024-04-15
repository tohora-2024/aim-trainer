export async function seed(knex) {
  await knex('player').del()

  await knex('player').insert([
    { id: 1, name: 'Joel', score: 1, time_taken: '', gamemode_id: 1 },
    { id: 2, name: 'Jess', score: 10, time_taken: '', gamemode_id: 1 },
    { id: 3, name: 'Boston', score: 20, time_taken: '', gamemode_id: 1 },
    { id: 4, name: 'Berhane', score: 10, time_taken: '', gamemode_id: 2 },
    { id: 5, name: 'Gerard', score: 100, time_taken: '', gamemode_id: 2 },
    { id: 6, name: 'Robert', score: 20, time_taken: '', gamemode_id: 3 },
  ])
}
