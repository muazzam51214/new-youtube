import dotenv from "dotenv";
dotenv.config({path : "./.env"})
import connectDB from "./db/index.js";
import { app } from "./app.js";
const port = process.env.PORT;
connectDB()
.then(() => {
  app.on("error", () => {
    console.log("Error : ", error);
    throw error;
  })

  app.listen(port, () => {
    console.log(`App is listening http://localhost:${port}`);
  })
})
.catch((error) => {
  console.log("MongoDB Connection Failed!!", error);
})