const mongoose =require('mongoose');

const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        max:10,
        min:6
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

});

mongoose.model('test',PostSchema);
