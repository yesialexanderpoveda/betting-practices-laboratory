const mongoose = require('mongoose')
const config = require('./config');

module.exports = () => {

    mongoose.connect(
        config.DB_URI,
        {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true

        },
        (err) => {
            if (err) {
                console.log('DB: ERROR !!');
            } else {
                console.log('Conexion correcta!!')
            }
        }
    )

}




