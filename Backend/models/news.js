const mongoose = require('mongoose');
const newsSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    content:{
        type : String,
    },
    date:{
        type : String,
    },
    imgNews:{    
        type: String,
        required: true,
    }
})
let News = mongoose.model("News",newsSchema);
module.exports = News;