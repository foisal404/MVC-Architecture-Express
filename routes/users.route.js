const express= require("express");
const router =express.Router();
const { getUser, saveUser } = require("../controllers/users.controler");


router.get("/users",getUser)
router.post("/users",saveUser)

 module.exports = router;