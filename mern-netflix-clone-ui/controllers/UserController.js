import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createErrorMsg } from '../utils/Errors.js'

import userModel from '../models/UserModel.js'



export const userRegister = async (req, res, next) => {

  try {
    console.log(req.body.password)
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: hash
    })

    const newUserResp = await newUser.save()

    return res.status(200).send("User has been created")
  } catch (error) {
    return next(error)
  }
}

export const userLogin = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ username: req.body.username })
    if (!user) {
      return next(createErrorMsg(404, "User not found !"))
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
    if (!isPasswordCorrect) {
      return next(createErrorMsg(400, "Wrong password or username"))
    }

    // Create a token that will be given to the user
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_KEY)
    const { password, isAdmin, ...details } = user._doc

    // Parse the token inside a cookie and send it to the user
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ details })
  } catch (error) {
    return next(error)
  }
}

export const userAddFavourites = async (req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(req.body.userId,
      { $addToSet: { favourites: req.body.movieId } }, { new: true }
    )
    console.log(updatedUser);
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
}

export const userRemoveFavourites = async (req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(req.body.userId,
      { $pull: { favourites: req.body.movieId } }, { new: true }
    )
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
}


export const userGetFavourites = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId)
    const { favourites } = userData
    res.status(200).json({ "favourites": favourites })
  } catch (error) {
    return next(error)
  }
}