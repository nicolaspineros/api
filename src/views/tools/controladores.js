const {getConnection} = require('../../routes/database');

const getCoupon = (req,res) => {
    const coupon = getConnection().get('coupon').value();
    res.json(coupon);
};

const getCid = (req, res) => {
    const consult = getConnection().get('coupon').find({id: req.params.id}).value();
    res.json(consult);
};

const getPid = (req, res) => {
    const consult = getConnection().get('product').find({id: req.params.id}).value();
    res.json(consult);
};

const getProduct = (req,res) => {
    const product = getConnection().get('product').value();
    res.json(product);
};

const createCoupon = (req,res) => {
    
    const newCoupon = {
        id: req.body,
        name: req.body.name,
        description: req.body.description,
        product_id: req.body.product_id,
        valid_since: req.body.valid_since,
        valid_until: req.body.valid_until
    };
    getConnection().get('coupon').push(newCoupon).write();    
    res.send(newCoupon)
};

const createProduct = (req,res) => {
    const newProduct = {
        id: req.body.id,
        name: req.body.name,
    };
    getConnection().get('product').push(newProduct).write();    
    res.send(newProduct)
};

module.exports = {
    getCoupon,
    getProduct,
    getCid,
    getPid,
    createCoupon,
    createProduct
}