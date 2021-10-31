export const verifyToken=(req,res,next)=>{

const token =req.header['x-access-token']
if(!token){
    return res.send('you need to log in')
}
try{const verification =jwt.verify(token,'slhe')
next()
}catch(error){
    return res.json({message:error.message})
}

}