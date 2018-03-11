const express = require('express');
require('./services/passport');

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use('/auth/google',authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App started on port ${port}`);
});