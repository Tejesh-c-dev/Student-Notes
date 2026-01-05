require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
const connectDB = require('./config/db');
const errorHandler = require("./middleware/errorHandler");

const app = express();
connectDB();

// CORS configuration - allow frontend to connect
app.use(cors({
  origin: 'http://localhost:5173', // Vite dev server
  credentials: true
}));

app.use(express.json());

app.use("/api/notes", require("./routes/noteRoutes"));

const PORT = process.env.PORT || 3000;
app.use('/api/', router);

// Error handler must be AFTER all routes
app.use(errorHandler);

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})