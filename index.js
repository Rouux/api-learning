const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 2000;

app.get('/user', (req, res) => {
	console.log(req.query);
	res.json({ name: 'roux' });
});

app.get('/products', (req, res) => {
	res.send('liste produtis');
});

app.post('/products', (req, res) => {
	res.send('liste produtis');
});

app.get('/recommandations', (req, res) => {
	res.send('liste produtis');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
