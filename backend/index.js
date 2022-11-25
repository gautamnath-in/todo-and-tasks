require('dotenv').config();

const app = require('./app');

const { PORT } = process.env

app.listen(PORT || 4000, (req, res) => {
    console.log(`App is listening to http://localhost:${PORT}`);
})