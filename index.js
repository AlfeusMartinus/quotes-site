if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const { request, response } = require('express');
const express = require('express');
const app = express();
const fetch = import('node-fetch');

app.use(express.static('public'));

app.listen(3000, () => {
    console.log(`app berjalan di port 3000`);
});