import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete account")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete account")
})

//UPDATE
router.put("/:id", updateUser)

//DELETE
router.delete("/:id", deleteUser)

//GET
router.get("/:id", getUser)

//GET ALL
router.get("/", getUsers)

export default router