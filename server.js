const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send({example: 'Hello there!'});
})



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App started on port ${port}`);
});