const mongoose=require('mongoose');
var Schema=mongoose.Schema;

mongoose.Promise=global.Promise;

var init=function(dbLink){
    mongoose.connect(dbLink,{ useNewUrlParser: true }).catch(function(err){
        logger.WriteToLog(`Error occurred while establishing connection to mongo db ${err}`);
    });
}

var FeedSchema=new Schema({
    Data:{
        type:String,
        trim:true,
        required:true
    },
    Type:{
        type:String,
        trim:true
    }
});

var TokenSchema=new Schema({
    AccessToken:{
        type:String
    },
    RefreshToken:{
        type:String
    },
    Scope:{
        type:String
    },
    TokenType:{
        type:String
    },
    IdToken:{
        type:String,
        index:true
    },
    ExpiryDate:{
        type:Number
    },
    User:{
        type:Schema.ObjectId,
        ref:'User'
    }
});

var UserSchema=new Schema({
    Id:{
        type:Number,
        unique:true
    },
    Email:{
        type:String,
        unique:true
    },
    Token:{
        type:Schema.ObjectId,
        ref:'Token'
    }
});

var Feed=mongoose.model("Feed",FeedSchema);
var Token=mongoose.model("Feed",TokenSchema);
var User=mongoose.model("Feed",UserSchema);

module.exports={
    Init:init,
    Feed,
    Token,
    User
};