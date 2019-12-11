module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get("db");
    // get_inventory matches the .sql file of the same name in the db folder (ex. /db/get_inventory.sql)
    db.get_inventory()
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Error" });
        console.log(err);
      });
  },

  newProduct: (req, res) => {
    const db = req.app.get("db");
    const { name, price, img } = req.body;
    // add_product matches the .sql file of the same name in the db folder (ex. /db/add_product.sql)
    db.add_product([name, price, img])
      .then(products => {
        console.log(products);
        res.status(200).send(products);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Error" });
        console.log(err);
      });
  },

  edit: (req, res) => {
    const db = req.app.get("db");
    const { id, name, price, img } = req.body;
    // edit_product matches the .sql file of the same name in the db folder (ex. /db/edit_product.sql)
    db.edit_product([id, name, price, img]).then(products => {
      res.status(200).send(products);
    });
  },

  delete: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    // delete_product matches the .sql file of the same name in the db folder (ex. /db/delete_product.sql)
    db.delete_product(id).then(products => {
      res.status(200).send(products);
    });
  }
};
