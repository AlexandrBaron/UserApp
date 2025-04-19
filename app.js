const express = require('express');
const userRoutes = require('./src/routes/userRoute');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server běží na http://localhost:3000');
});
