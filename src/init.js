
// .env variables are read.
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.TEST);

// connect to mongoDB
import "./db";

// import models of items
import "./models/item";
import app from "./server";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);