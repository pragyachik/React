const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose')

// mongoose.connect("mongodb://localhost:4000/subscribers", { useNewUrlParser: true})
// const db = mongoose.connection
// db.on('error',(error)=>{console.log(error)})
// db.once('open',()=>{console.log('Connected to database')})

const app = express();


app.set('view engine','ejs')

app.listen(4000);


app.use(express.static('public'))


app.get('/', (req,res)=>{
    var posts = [
        {title:'blog',content:'visit to the FOREST',date:'14th august 1912'},
        {title:'blog2',content:'visit to the FOREST',date:'14th august 1912'},
        {title:'blog3',content:'visit to the FOREST',date:'14th august 1912'}

    ]
    // res.send("<p>Good Evening M</p>")
    //res.sendFile('./views/home.html',{root:__dirname})
    res.render('home',{title:'Home',posts})
});

app.get('/about', (req,res)=>{
    // res.sendFile('./views/about.html',{root:__dirname})
    res.render('about',{title:'about page'})
})

app.get('/aboutus',(req,res)=>{
    res.redirect('/about')
})

app.use((req,res)=>{
    // res.status(301).sendFile('views/404.html',{root:__dirname})
    res.render('404',{title:'404'})
})














//-----------------------------------------------------------------------------

// const http = require('http');

// const server = http.createServer((req, res)=>{
//     console.log('request made');
//     console.log(req);
// })

// server.listen(4000, 'localhost', () => {
//     console.log('listening for requests on port 4000');
// })



// const express = require('express');
// const {readFile} = require('fs');
// const app = express();

// app.get('/', (request,response)=>{
//     readFile('./home.html','utf-8',(err,txt)=>{
//         if(err){
//             response.status(500).send('Sorry server is trash');
//         }
//         response.send(txt)
//     })
// });

// app.listen(process.env.PORT || 3000, ()=>{console.log('App running on http://localhost:3000')})






// const myModule = require('./my-module.js');

// console.log(myModule);






// const {readFile} = require('fs').promises;

// async function readTextFile(){
//     const txt = await readFile('./hello.txt','utf-8');
//     console.log(txt);
//     console.log('random thing');
// }

// readTextFile();





// const { readFile, readFileSync } = require('fs');

// readFile('./hello.txt','utf-8', (err,tinput)=>{
//     if(err){
//         console.log('An error occured');
//     } else {
//         console.log(tinput);
//     }
// });

// console.log('random thing');





// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter()

// eventEmitter.on('wake', ()=>{
//     console.log("GM M");
// })

// eventEmitter.emit('wake')





// console.log('Hi M!👋');
// console.log(global.luckyNum);
// global.luckyNum = 8;
// console.log(global.luckyNum);
// console.log(process.platform);
// console.log(process.env.USER);