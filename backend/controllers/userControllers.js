import knex from "knex"
const knexConn = knex({
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : '',
      database : 'ebook'
}})
export const getOne = async (req,res)=> {
  await knexConn.select('*').table('login')
  .where('username',req.body.email)
  .andWhere('password',req.body.password)
  .then(data => res.json(data))
  
  .catch(err => res.json(err))
  
}