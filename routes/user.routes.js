const { Router } = require("express");
const {
    getUsers,
    postUser,
    putUser,
    deleteUser,
    patchUser
} = require('../controllers/user.controller');

const router = Router();

router.get("/", getUsers);

router.put("/:id", putUser);

router.post("/", postUser);

router.delete("/", deleteUser);

router.patch("/",  patchUser);

module.exports = router;
