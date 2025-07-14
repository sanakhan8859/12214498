const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB_URI = process.env.MONGO_DB_URI;
if (!MONGO_DB_URI) {
    throw new Error('Missing MONGO_DB_URI environment variable');
}

const dbConnect = async () => {
    try {
        const connectionResponse = await mongoose.connect(MONGO_DB_URI);
        console.log(`MongoDB connected successfully`);
        return connectionResponse;
    } catch (error) {
        console.error('Error while connecting to MongoDB:', error);
        throw error;
    }
}

module.exports = { 
    dbConnect
}
