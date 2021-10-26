import express from "express"
import mysql from "mysql"
import bookRoutes from './routes/bookRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

const PORT = process.env.PORT || 5000;

var db_conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'ebook'
  });

const app = express()
app.use(express.json())
app.use(cors())

app.use('/books',bookRoutes)
app.use('/contacts',contactRoutes)
app.use('/user',userRoutes)


db_conn.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }

    app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

})
