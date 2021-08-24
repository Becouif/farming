const express = require('express')
const bodyParser = require('body-parser')
const request = require('request');
const app = express();
const port = 3000;
const https = require('https')
app.set('view engine', 'ejs');




app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));



const date = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }
    const todayDate = date.toLocaleTimeString("en-us", options)
// beginning of app get

app.get('/', (req,res) => {
    
    res.render('landing', {presentDay:todayDate,
    });
})

app.get("/index", (req, res) => {
    res.render('index', {presentDay:todayDate,
    });


})




app.get('/product', (req,res) => {
    res.render('product', {
        presentDay:todayDate,
    })
})


// beginning of app post 
app.post("/", (req, res) => {
 
    
})




app.listen(port, (req, res) => {
    console.log("server up " + port);
})