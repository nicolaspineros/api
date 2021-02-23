const { Router } = require('express');
const router = Router();

const {getCoupon, getProduct, getCid, getPid, createProduct, createCoupon, validar} = require('../views/tools/controladores')

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/consultar-bono',getCoupon);
router.get('/consultar-bono/:id',getCid);
router.get('/consultar-producto',getProduct);
router.get('/consultar-producto/:id',getPid);
router.post('/adicionar-bono',createCoupon);
router.post('/adicionar-producto',createProduct);

module.exports = router;
