import knex from "knex";
const knexConn = knex({
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : '',
      database : 'ebook'
}})
    export const getContact = async (req,res)=> {
        await knexConn.select().table('contact')
        .then(data => res.json(data))
        .catch(err => res.json(err))
    }
 
    export const InsertContact = async (req,res)=> {
        await knexConn.from('contact')
        .insert({'name':req.body.name,'lastname':req.body.lastname,'email':req.body.email,'subject':req.body.subject,'message':req.body.message})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    }