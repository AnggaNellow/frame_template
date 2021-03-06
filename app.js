const express     = require('express');
const app         = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(process.env.PORT, process.env.IP, () => console.log('Server has started!'));
