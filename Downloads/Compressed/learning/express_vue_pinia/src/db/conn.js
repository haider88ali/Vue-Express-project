const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/new_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
console.log('Connect');
}) .catch((e) => {
console.log('Error connecting');
});