export async function seed(knex) {
  await knex('player').del()

  await knex('player').insert([
  ])
}
