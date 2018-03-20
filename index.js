import express from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import  routes  from "./src/routes/crmRoutes";
var app = express();
var PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/crmdb');



app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

routes(app);

//serving static files
app.use(express.static('public'));

app.get('/', (req, res) => 
    res.send(`node & express server is running in port: ${PORT}`)
);


app.listen(PORT, () =>
    console.log(`server is running in port: ${PORT}`)
);
