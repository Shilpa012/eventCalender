const express = require("express");
const EventScheme = require("../modal/event");
const deleteEventRouter = express.Router();

deleteEventRouter.post('/', async (req, res) => {
    try {
        setTimeout(async () => {
            const { id } = req.body;
            console.log(id);
            await EventScheme.findOneAndDelete({id});
            res.status(200).send({ status: "SUCCESS", message: "Event Deleted" });
        }, 1500);

    } catch (error) {
        res.status(500).send({ status: "FAILED", message: "Server Error" });
    }
})

module.exports = deleteEventRouter;
