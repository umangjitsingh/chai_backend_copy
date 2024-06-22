import dotenv from "dotenv"
import connectDB from "./db/index.js";

const a = connectDB();
console.log(a);
