const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
require('dotenv').config()

//mongodb connect
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'mh'

MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to ${dbName} Database`);
        db = client.db(dbName)
    })
//

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    db.collection('quotes').find().toArray()
    .then(data => {
        let quote = data[Math.floor(Math.random() * data.length)]
        res.render('index.ejs', {quote: quote})
    })
    .catch(err => console.error(err))
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on ${PORT}`);
})