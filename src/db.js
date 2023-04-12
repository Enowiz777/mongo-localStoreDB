import mongoose from "mongoose";

// READ .env variable
const dotenv = require("dotenv");
dotenv.config();

// connect to the local mongo dbs.
mongoose.connect(process.env.DB_URL,
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// attempt to connect into the db.
const db = mongoose.connection;

// 
const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

// once - the connection is open, you will use the handleOpen and 
db.on("error", handleError);
db.once("open", handleOpen);