const express = require('express');
const app = express();
const getMatch = require('./getMatch');

const {Client} = require('pg');
const client = new Client({
    port:5432,
    user: "postgres",
    host: "localhost",
    password: "punit",
    database: "demo",
});

client.connect()
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req,res)=>{
    try{res.send("<h1>HOME</h1>");}
    catch(error){console.log(error);}
});

app.get("/matches/:id",async (req,res)=>{
    try{
        let id = req.params.id;
        const result = await getMatch(client,id);
        res.json(result);
    }
    catch(error){
        console.log(error);
    }
});

app.listen(PORT);