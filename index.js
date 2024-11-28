const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const categoryRouter = require('./routers/categoryRouter');
const productsRouter = require('./routers/productsRouter');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('products api running new deploy');
});

app.use("/api/v1",categoryRouter);
app.use("/api/v1",productsRouter);



// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


// Start the Server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
