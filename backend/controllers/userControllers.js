import knex from "knex"
import jwt from "jsonwebtoken"
import express from "express";
import { knexConn } from "../config/db_config.js"

export const register = async (req, res) => {
  const { name, email, password } = req.body
  //test email
  await knexConn.select('*')
    .from('users')
    .where('email', email)
    .then(result => {
      if (result.length > 0) {
        return res.json({ 'message': 'user exist!!' })
      }
    })

  //insert New User
  const newUser = { name, email, password }
  await knexConn
    .insert({'name':name,'email':email,'password':password})
    .into('users')
    .then(result => res.send('user added')
    ).catch(err => res.send(err))
}
export const login = async(req , res)=>{
  const {email,password} =req.body
  await knexConn.select('*')
  .from('users')
  .where('email',email)
  .andWhere('password',password)
  .then(result =>{
    if ( result.length === 0){
return res.status(404).json({message:'invalid credentials!!'})
    }
    const token = jwt.sign({id: result[0].id,},'slhe')
    const user ={
      name:result[0].name,
      email:result[0].email
    }
return res.status(200).json({user,token})
  }).catch(err=> res.send(err))

}

