import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createErrorMsg } from '../utils/errorResponse.js'

import userModel from '../models/userModel.js'



export const userRegister = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: hash
    })

    const newUserResp = await newUser.save()
    const { password, isAdmin, createdAt, updatedAt, __v, ...remaining } = newUserResp._doc

    return res.status(200).send(remaining)
  } catch (error) {
    return next(error)
  }
}

export const userLogin = async (req, res, next) => {

  try {
    //search the user by email address
    const user = await userModel.findOne({ email: req.body.email })
    if (!user) {
      return next(createErrorMsg(404, "User not found !"))
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
    if (!isPasswordCorrect) {
      return next(createErrorMsg(400, "Wrong password or username"))
    }

    // Create a token that will be given to the user
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_KEY)
    const { password, isAdmin, createdAt, updatedAt, __v, ...remaining } = user._doc

    // Parse the token inside a cookie and send it to the user
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(remaining)
  } catch (error) {
    return next(error)
  }
}

export const userAddFavourites = async (req, res, next) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(req.params.id,
      { $addToSet: { favourites: req.body.movieId } }, { new: true }
    )
    const { favourites } = updatedUser
    return res.status(200).json({ "favourites": favourites })
  } catch (err) {
    return next(err)
  }
}

export const userRemoveFavourites = async (req, res, next) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(req.params.id,
      { $pull: { favourites: req.body.movieId } }, { new: true }
    )
    const { favourites } = updatedUser
    return res.status(200).json({ "favourites": favourites })
  } catch (err) {
    return next(err)
  }
}


export const userGetFavourites = async (req, res, next) => {
  try {
    console.log('userGetFavourites');
    const userData = await userModel.findById(req.params.id)
    const { favourites } = userData
    return res.status(200).json({ "favourites": favourites })
  } catch (error) {
    return next(error)
  }
}