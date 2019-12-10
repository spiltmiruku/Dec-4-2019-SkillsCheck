module.exports = {
	getProducts: (req, res) => {
		const db = req.app.get('db');
		db
			.get_inventory()
			.then((products) => {
				res.status(200).send(products);
			})
			.catch((err) => {
				res.status(500).send({ errorMessage: 'Error' });
				console.log(err);
			});
	},

	newProduct: (req, res) => {
		const db = req.app.get('db');
		const { name, price, img } = req.body;
		db
			.add_product([ name, price, img ])
			.then((products) => {
				console.log(products);
				res.status(200).send(products);
			})
			.catch((err) => {
				res.status(500).send({ errorMessage: 'Error' });
				console.log(err);
			});
	},

	edit: (req, res) => {
		const db = req.app.get('db');
		const { id, name, price, img } = req.body;
		db.edit_product([ id, name, price, img ]).then((products) => {
			res.status(200).send(products);
		});
	},

	delete: (req, res) => {
		const db = req.app.get('db');
		const { id } = req.params;
		db.delete_product(id).then((products) => {
			res.status(200).send(products);
		});
	}
};
