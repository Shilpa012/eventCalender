const express = require("express");
const EventScheme = require("../modal/event");
const addEventRouter = express.Router();

addEventRouter.post('/', async (req, res) => {
    try {
        setTimeout(async () => {
            const { id, reason, date, month, year } = req.body;
            await EventScheme.create({ id, name: reason, date, month, year });
            res.status(200).send({ status: "SUCCESS", message: "Event Created" });
        }, 1500)

    } catch (error) {
        console.log(error)
        res.status(500).send({ status: "FAILED", message: "Server Error" });
    }
})

module.exports = addEventRouter;
