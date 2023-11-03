import express from "express";

const chatRoutes = express.Router();

chatRoutes.get("/", ( req, res, next ) => { 
    console.log('hi') 
    res.send('hello from chatRoutes')
});

export default chatRoutes;
