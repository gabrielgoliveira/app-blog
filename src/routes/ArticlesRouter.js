const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
    res.json({
        message: 'Listar Articles'
    });
});

module.exports = router;