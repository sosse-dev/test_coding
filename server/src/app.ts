import "dotenv/config";
import express from "express"
import cors from "cors"
import { userRouter } from "./routes/users.route";

const app = express();
const PORT = process.env.PORT || 5555;

app.use(cors())
app.use(express.json());
app.use("/users", userRouter); // ingat routenya /users

app.listen(PORT, () => {
  // console.log(`Server is running on port ${PORT}`);
});