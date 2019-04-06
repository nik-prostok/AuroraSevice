const mongoose = require('mongoose')

//  Я переделал под Promise, чтобы удобнее было работать

const connect = config => new Promise((resolve, reject) => {
    mongoose.connect(config.mongodb, { useNewUrlParser: true })
    mongoose.Promise = global.Promise
    mongoose.connection
        .once('open', () => resolve())
        .on('error', error => reject(error))
})

module.exports = connect
