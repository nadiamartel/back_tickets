const {Router} = require("express");
const userRouter = Router();
const {  } = require(); //aca los handlers

userRouter
.post("/", createUser)
.get("/", getUser)
.patch("/", updateUser)
.post("/", loginUser)

module.exports = userRouter;

//para el crear y nodificar usuario, validar antes con Auth-->middleware