import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import PostRoute from "./routes/inputRoute.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({limit: "32mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}))


mongoose.connect("mongodb+srv://bizsapp:bizmongo@cluster0.dkprbub.mongodb.net/bizsapp?retryWrites=true&w=majority")

app.use("/", PostRoute)


app.listen(3001, function(){
    console.log("server running in prot:3001");
})