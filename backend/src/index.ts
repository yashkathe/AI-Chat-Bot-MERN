import express from "express";

const app = express();

// Middlewares
app.use(express.json())

// Connections and Listeners
app.listen(process.env.PORT || 5000, () => console.log(`server started on port ${process.env.PORT || 5000}`));
