const express = require('express');
const router = express.Router();

router.get('/categories', (req, res) => {
    res.json({
        message: 'Listar Categorias'
    });
});

module.exports = router;