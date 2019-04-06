const express = require('express')

const router = express.Router()

const sheduleRoute = require('./routes/shedule.route')
// const categoriesRoute = require('./routes/categories.route')

router.use('/', sheduleRoute)
// router.use('/', categoriesRoute)

router.get('/test', (req, res) => {
    res.json({
        products: [
            { name: 'TestItem1', price_usd: '14', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ktlwSh8RQGskNFUfNSyfHZYLe-Duiu8BgQMb3JEw9uLV7KpbmA' },
            { name: 'TestItem2', price_usd: '19', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ktlwSh8RQGskNFUfNSyfHZYLe-Duiu8BgQMb3JEw9uLV7KpbmA' },
            { name: 'TestItem3', price_usd: '1', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ktlwSh8RQGskNFUfNSyfHZYLe-Duiu8BgQMb3JEw9uLV7KpbmA' },
            { name: 'TestItem4', price_usd: '13', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ktlwSh8RQGskNFUfNSyfHZYLe-Duiu8BgQMb3JEw9uLV7KpbmA' }
        ]
    })
})

module.exports = router
