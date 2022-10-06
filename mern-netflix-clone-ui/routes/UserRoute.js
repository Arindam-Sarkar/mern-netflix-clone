import express from "express";

import {
  userLogin,
  userRegister,
  userAddFavourites,
  userRemoveFavourites,
  userGetFavourites
} from "../controllers/userController.js";

import { verifyUser, verifyAdmin } from "../utils/veryfyToken.js";

const router = express.Router()

router.post("/register", userRegister)
router.post("/login", userLogin)
router.put("/favourites/add/", verifyUser, userAddFavourites)
router.put("/favourites/remove/", verifyUser, userRemoveFavourites)
router.get("/favourites/get/", verifyUser, userGetFavourites)

export default router