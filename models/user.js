var mongoose = require("mongoose");
var	passportLocal = require("passport-local-mongoose");
const Bookcopy = require("../models/bookCopy")

//DEFINING THE USER MODEL
var userSchema=new mongoose.Schema({

	//TODO: DEFINE USERNAME AND PASSSWORD ATTRIBUTES

    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },

    loaned_books:[
        //TODO: embed reference to id's of book copies loaned by this particular user in this array
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Bookcopy'
        }
    ]
})

userSchema.plugin(passportLocal);
module.exports=mongoose.model("User",userSchema);
