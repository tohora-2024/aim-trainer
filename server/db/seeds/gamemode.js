export async function seed(knex) {
  await knex('gamemode').del()

  await knex('gamemode').insert([
    { id: 1, name: 'Classic 1 Minute', time_left: '1:00' },
    { id: 2, name: 'Classic 2 Minute', time_left: '2:00' },
    { id: 3, name: 'Classic 3 Minute', time_left: '3:00' },
    { id: 4, name: 'Till you miss', time_left: '' },
  ])
}
