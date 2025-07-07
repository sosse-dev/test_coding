import "dotenv/config";
import express from "express"
import cors from "cors"
import { userRouter } from "./routes/users.route";

const app = express();

app.use(cors())
app.use(express.json());
app.use("/users", userRouter); // ingat routenya /users

export default app