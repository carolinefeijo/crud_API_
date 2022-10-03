const mongoose = require("mongoose");
let crud = "usersCrud";

mongoose.connect(`mongodb+srv://saberdigital:saberdigital@saber-digital-db.bbpgwpb.mongodb.net/${crud}`, { useNewUrlParser: true, useUnifiedTopology: true },

    function(err) {
        if (err) throw err;
        else {
            console.log('sucess connection with db');
        }
    });

module.exports = mongoose;