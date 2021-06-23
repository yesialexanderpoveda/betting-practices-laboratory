const express = require('express')
const initDB = require('./config/db')
const config = require('./config/config');
const createRoles = require('./libs/initialSetup');
const bodyParser = require('body-parser');
const app = express()
const userRoutes = require('./routes/user');
const laboratoryRoutes = require('./routes/betLaboratory');
const homeRouter = require('./routes/home');

app.use(
    bodyParser.json({
        limit: '20mb',
        extended: true
    })
)
app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)


app.use(userRoutes)
app.use(laboratoryRoutes)
app.use(homeRouter);


const Port = config.port;
app.listen(Port, () => {
    console.log(`listening on port and now we are with nodemon http://loscalhost:${Port}`)
})

initDB()
createRoles();