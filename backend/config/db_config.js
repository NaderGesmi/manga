import knex from "knex"

export const knexConn = knex({
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : 'azerty123',
      database : 'ebook'
}})