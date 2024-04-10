export async function seed(knex) {
  await knex('gamemode').del()

  await knex('gamemode').insert([
    { id: 1, name: 'Classic 1 Minute', time_left: '1:00' },
    { id: 2, name: 'Classic 2 Minute', time_left: '1:00' },
    { id: 3, name: 'Classic 3 Minute', time_left: '1:00' },
  ])
}
