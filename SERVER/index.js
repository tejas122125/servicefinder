import express from "express";
import bodyParser from "body-parser";
import path, { dirname } from "path";
 import { fileURLToPath } from "url";
// import pg from "pg";

const __dirname =  dirname(fileURLToPath(import.meta.url));

const baseurl = path.join(__dirname, "..", "dist");

const app = express();
const port = 3000;
// const db = new pg.Client({
//     user: "postgres",
//     host: "localhost",
//     database: "hack-fest",
//     password: "123456",
//     port: 5432,
//   });

//   db.connect();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(baseurl));


app.get("/profile",(req,res)=>{
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    console.log("latitude" + latitude  + "longitude" +longitude);

})


app.get("*",(req,res)=>{
    res.sendFile(baseurl + "/index.html");
});


app.listen(port,() =>{
    console.log(`your site is live at localhost ${port}`);
})