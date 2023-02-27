
const Router = require("express");
const routes = Router();

const addEventRouter = require("../controllers/addEvent");
const deleteEventRouter = require("../controllers/deleteEvent");
const getAllEventsRouter = require("../controllers/getAllEvents");

routes.use('/add-event', addEventRouter);
routes.use('/delete-event', deleteEventRouter);
routes.use('/get-all-events', getAllEventsRouter);

module.exports = routes;