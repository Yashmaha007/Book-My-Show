const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const cors = require("cors"); //import express
const app = express(); //import mongoose
const router = require("./routes/routes"); //import routes
const port = process.env.PORT || 8080; //setting port to 8080
//connect to mongodb to application
const uri =
  "mongodb+srv://yashmaha005:Yash123@cluster0.igwrmak.mongodb.net/?retryWrites=true&w=majorityy";

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api", router);


//connect to the database
mongoose
  .connect(uri)
  .then(() => console.log("db connected"))
  .then(() =>
    app.listen(port, () => {
      console.log(`Listening on Port ${port}`);
    })
  )
  .catch((err) => console.log(err));
