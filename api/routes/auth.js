import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello is Auth EndPoint")
})
router.get("/register", (req, res) => {
    res.send("Hello is Auth register EndPoint")
})

export default router