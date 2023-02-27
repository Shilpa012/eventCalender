const express = require("express");
const EventScheme = require("../modal/event");
const getAllEventsRouter = express.Router();

getAllEventsRouter.get('/', async(req, res)=>{
    try {
        const eventList = await EventScheme.find();
        res.status(200).send({ status: "SUCCESS", eventList, message: "Events Fetched" });

    } catch (error) {
        res.status(500).send({ status: "FAILED", message: "Server Error" });
    }
})

module.exports = getAllEventsRouter;
