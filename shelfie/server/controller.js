module.exports = {

    getProducts: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory().then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send({errorMessage: 'Error'})
            console.log(err)
        })
    },

    newProduct: (req, res) => {
        const db = req.app.get('db')
        const {url, productName, price} = req.body
        db.add_product([productName, price, url]).then(products => {
            console.log(products)
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send({errorMessage: 'Error'})
            console.log(err)
        })
    },

    edit: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name, price, image} = req.body
        db.edit_product([productName, price, url]).then(products => {
            res.status(200).send(products)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product(id).then(products => {
            res.status(200).send(products)
        })
    }
}