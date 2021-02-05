const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const Stripe = require('stripe'); 
const stripe = Stripe('public password');

//Initializations
const app = express();


//Settings 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir:path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
//Stripe

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname,'public')));

//Server Listening
app.listen(app.get('port'),() =>{
    console.log(`Server on port ${app.get('port')}`)
})