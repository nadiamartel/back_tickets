const {Router} = require("express");
const eventRouter = Router();
const { createEvent,
        getEvent,
        updateEvent,
        deleteEvent} = require("../handlers/eventHandlers.js"); 

eventRouter
    .post("/", createEvent)
    .get("/", getEvent)
    .patch("/", updateEvent)
    .delete("/", deleteEvent)

module.exports = eventRouter;