const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./dbConnect/dbConnect");
const portfolioRoute = require("./routes/portfolioRoute");
const cors = require("cors");
const { v2: cloudinary } = require("cloudinary");
const fileUpload = require("express-fileupload");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/portfolio", portfolioRoute);

// Connect to DB and Start Server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Cloudinary setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
