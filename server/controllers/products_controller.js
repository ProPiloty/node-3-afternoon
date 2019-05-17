module.exports = {
    create: (req, res, next) => {
        const database = req.app.get('db');
        const { name, description, price, image_url } = req.body;
        
        database.create_product([ name, description, price, image_url ])
            .then( () => res.sendStatus(200) )
            .catch( () => {
                res.status(500).send({errorMessage: 'Something went wrong! Check the console'});
                console.log(err);
            });
    },
    getOne: (req, res, next) => {
        const database = req.app.get('db');
        const { id } = req.params;

        database.read_product( id )
        .then( () => res.sendStatus(200) )
        .catch( () => {
            res.status(500).send({errorMessage: 'Something went wrong! Check the console'});
            console.log(err);
        });
    },
    getAll: (req, res, next) => {
        const database = req.app.get('db');

        database.read_products()
        .then( () => res.sendStatus(200) )
        .catch( () => {
            res.status(500).send({errorMessage: 'Something went wrong! Check the console'});
            console.log(err);
        });
    },
    update: (req, res, next) => {
        const database = req.app.get('db');
        const { params, query } = req;

        database.update_product([params.id, query.desc])
        .then( () => res.sendStatus(200) )
        .catch( () => {
            res.status(500).send({errorMessage: 'Something went wrong! Check the console'});
            console.log(err);
        });
    },
    delete: (req, res, next) => {
        const database = req.app.get('db');
        const { id } = req.params;

        database.delete_product( id )
        .then( () => res.sendStatus(200) )
        .catch( () => {
            res.status(500).send({errorMessage: 'Something went wrong! Check the console'});
            console.log(err);
        });
    }
}