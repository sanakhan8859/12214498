const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnect } = require('./Backend_Test_Submission/db/connect');
const v1RouterUrl = require('./Backend_Test_Submission/routers/v1/v1.router');
const PORT = process.env.PORT;

const app = express();


app.use(express.json());
app.use(cors());


app.use('/api/v1', v1RouterUrl);

async function startServer() {
  try {
    await dbConnect();
    app.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error starting the server:', error);
    process.exit(1);
  }
}

startServer();
