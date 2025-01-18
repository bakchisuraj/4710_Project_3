const mongoose = require('mongoose');
const connectDB = async () => {
  console.log('MONGO_URI:', process.env.MONGO_URI); 
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
