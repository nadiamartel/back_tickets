const { Router } = require("express");
const router = Router();

const userRouter = require("./user");
const eventRouter = require("./event")

router.use("/user", userRouter)
router.use("/event", eventRouter)

module.exports = router;