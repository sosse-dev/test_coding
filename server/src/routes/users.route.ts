import { Router } from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUsersByName,
} from "../controllers/user.controller";

export const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/search/:q", getUsersByName);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);