import mongoose from "mongoose";
import { DB_NAME } from '../constants.js'

async function connectDB() {
  try {
   const connectionInstance = await mongoose.connect
   (`${process.env.MONGODB_URI}/ ${DB_NAME}`);

   console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  // console.log(connectionInstance);


  } catch (error) {
    console.log("MONGO_DB CONNECTION ERROR : ", error);
   process.exit(1)
  }
}
export default connectDB