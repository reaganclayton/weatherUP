const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:city', async (req, res) => {
    try {
        const city = req.params.city;
        const url = `${process.env.BASEURL}${city}&units=imperial&APPID=${process.env.API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        if(data.cod == '404') {
            return res.status(404).json({
                message: 'City not found'
            });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        })
    }
});

module.exports = router;