const {Router} = require('express');
const router = Router();

router.get('/', (req,res) => {
    res.render('index.ejs')    
});

router.get('/adicionar', (req,res) => {
    res.render('adicionar')
});

module.exports = router;
