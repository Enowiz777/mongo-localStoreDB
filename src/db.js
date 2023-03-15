import mongoose from "mongoose";

// connect to the local mongo dbs.
mongoose.connect("mongodb://127.0.0.1:27017/wetube",
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