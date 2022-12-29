const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('forbbiden'))
        }
    }
}

app.use(cors(options));

app.get('/', (req,res) => {
    res.send("Hello world")
})

app.get('/new-route', (req, res) => {
    res.send("Im a new route")
})

app.listen(port, () => {
    console.log('Port' + port);
});