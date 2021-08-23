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

const names = [];
const genders = [];
const proba = [];



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
app.get("/", (req, res) => {
    
    

    res.render('index', {presentDay:todayDate, name:names, gender:genders, prob:proba
    });


})

app.get('/gender', (req, res) => {
    
    res.render('gender', {
        presentDay:todayDate,
        name:names, gender:genders, prob:proba
    })
})

app.get('/product', (req,res) => {
    res.render('product', {
        presentDay:todayDate,
    })
})


// beginning of app post 
app.post("/", (req, res) => {
    // const userName = req.body.cName

    // const url = "https://api.genderize.io?name=" + userName;
    // https.get(url, (response) => {
    //     response.on("data", (data) => {
    //         spaceData = JSON.parse(data);
    //         dataName = spaceData.name;
    //         dataGender = spaceData.gender;
    //         dataPro = spaceData.probability;
    //         names.push(dataName);
    //         genders.push(dataGender);
    //         proba.push(dataPro);
            
    //         res.redirect('/')
    //         setTimeout(() => {
    //             names.pop(dataName);
    //             genders.pop(dataGender);
    //             proba.pop(dataPro)
    //         }, 2000);
    //     })
    // })

    
})


app.post('/gender', (req,res) => {
    const userName = req.body.cName

    const url = "https://api.genderize.io?name=" + userName;
    https.get(url, (response) => {
        response.on("data", (data) => {
            spaceData = JSON.parse(data);
            dataName = spaceData.name;
            dataGender = spaceData.gender;
            dataPro = spaceData.probability;
            names.push(dataName);
            genders.push(dataGender);
            proba.push(dataPro);
        })
    })
})



app.listen(port, (req, res) => {
    console.log("server up " + port);
})