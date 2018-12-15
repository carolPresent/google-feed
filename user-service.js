var Repository=require('./dbfunctions');
var Database=require('./database');

var saveLoginDetails=async (data)=>{

    var newTokenModel={
        AccessToken:data.access_token,
        RefreshToken:data.refresh_token,
        Scope:data.scope,
        TokenType:data.token_type,
        IdToken:data.id_token,
        ExpiryDate:data.expiry_date
    };

    let token = await Repository.saveOne(newTokenModel);

    let user= await Repository.getOne(Database.User,{Id:data.id,Email:data.email});

    console.log(user);
    console.log(token);

    if(user==null){

        let newUserModel={
            Id:data.id,
            Email:data.email,
            Token:token._id
        };

        await Repository.saveOne(newUserModel);

    }else{

        await Repository.deleteMany(Database.Token,{_id:user.Token});

        user.Token=token._id;

        await user.save();

    }
    
}

module.exports={
    SaveLoginDetails:saveLoginDetails
}