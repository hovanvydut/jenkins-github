const express = require('express');
const app = express();

app.get('/contact', function(req, res) {
	res.send('Hello Vy');
});

app.listen(3000, () => console.log('Jenkins-Github nodejs is running on port 3000'));
