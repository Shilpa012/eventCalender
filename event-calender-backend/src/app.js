const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const cors = require("cors");
const app = express();

const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(routes);

const initializeApp = async () => {
    try {
        await mongoose.connect("mongodb+srv://shilpa:QAZplm123@cluster0.zibsbdy.mongodb.net/test");
        app.listen(PORT, () => {
            console.log(`server is listening to port ${PORT}`)
        })
    } catch (error) {
        console.log(error);
        throw error;
    }

}

initializeApp();