import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/routes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", userRoutes);
const PORT  = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})