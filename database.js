const mongoose = require('mongoose');
const connection = "mongodb+srv://pflash:Brainiac0003!!!@userpro.boslw.mongodb.net/usepro_members>?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));