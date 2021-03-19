//jshint esversion:6

const express = require("express")
const moment = require("moment")


const app = express()

const port = process.env.PORT||3000;
app.locals.moment = moment

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/',require('./routes/news'))
 



app.set('views','./views')

app.listen(port, ()=> console.log("Server is listening on port 3000"))







