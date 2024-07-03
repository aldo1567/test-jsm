const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./models');

// Middleware
app.use(express.json());

// Routes
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

// Sync database and start server
const PORT = process.env.PORT || 3007;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
