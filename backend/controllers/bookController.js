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
export const getAll = async (req,res)=> {
    await knexConn.select().table('book')
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
export const getOne = async (req,res)=> {
    await knexConn.select().table('book').where('email',req.params.bookid)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
export const Update = async (req,res)=> {
    await knexConn.from ('book')
    .where('id',req.params.bookid)
    .update({'title':req.body.title,'auth':req.body.auth,'price':req.body.price,'picture':req.body.picture})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
export const Delete = async (req,res)=> {
    await knexConn.from ('book')
    .where('id',req.params.bookid)
    .delete()
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
export const Insert = async (req,res)=> {
    await knexConn.from ('book')
    .insert({'title':req.body.title,'auth':req.body.auth,'price':req.body.price,'picture':req.body.picture})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
