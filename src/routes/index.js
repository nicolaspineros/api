const { Router } = require('express');
const router = Router();
const fs = require('fs')

const json_bonos = fs.readFileSync('src/products.json','utf-8');
const bonos = JSON.parse(json_bonos);

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/adicionar', (req, res) => {
    res.render('adicionar');
});

router.get('/consultar', (req, res) => {
    res.render('consultar', {
        bonos
    });
});

router.post('/adicionar', (req, res) => {
    const {id, name, description, product_id, valid_since, valid_until} = req.body;
    let newBono = {
        id, 
        name, 
        description, 
        product_id, 
        valid_since, 
        valid_until
    }

    bonos.push(newBono);

    const json_bonos = JSON.stringify(bonos)
    fs.writeFileSync('src/products.json', json_bonos, 'utf-8');

    res.redirect('/');
});

module.exports = router;
