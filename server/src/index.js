import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import connectDb from "./db/config.js";
const PORT = process.env.PORT || 7777;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
  });
});
