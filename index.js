const http = require('http')
const express = require('express')
const path = require('path');
const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 8000
const router = express.Router();

app.use(express.static(__dirname + '/speech-recognition' ));
// app.set('views', path.join(__dirname, '/../views'));
// app.set('view engine', 'pug');
app.use("/", router)


/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('index.html');
});

server.listen(port, function() {
    console.log(`servidor na porta ${port}`)
})
