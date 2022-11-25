const mongoose = require('mongoose');
const {MONGODB_URL} = process.env
exports.connect = () => mongoose.connect(MONGODB_URL).then(() => console.log('DB Connected')).catch(e => console.log(e.message));