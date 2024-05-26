const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./dbConnect/dbConnect");
const portfolioRoute = require("./routes/portfolioRoute");
const cors = require("cors");

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
