const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');

//initial ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);


// app.use('/vendor', express.static('public'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/img', express.static(__dirname + '/public/img'))
app.use('/vendor', express.static(__dirname + '/public/vendor'))
app.use('/js', express.static(__dirname + '/public/js'))




app.get('/home', (req, res) => {
  res.render('page/home', {title: 'Home',layout : 'layout/_master'})
});

app.get('/chart', (req, res) => {
  res.render('page/chart', {title: 'Chart',layout : 'layout/_master'})
});

app.get('/table', (req, res) => {
  res.render('page/table', {title: 'Table',layout : 'layout/_master'})
});

// app.get('/chart', (req, res) => {

// });

// app.get('/table', (req, res) => {

// });


// app.use('/vendor', express.static('public'));


app.use('/', (req, res) => {
  res.status(404);
  // res.send('404')
  res.render('page/404', {
    title : '404',
    layout : 'layout/_master'
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})