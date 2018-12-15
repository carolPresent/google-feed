var Repository=require('./dbfunctions');
var Database=require('./database');

var getFeeds=async ()=>{

    let feeds=await Repository.getMany(Database.Feed,{IsOccupied:false});

    return feeds.slice(0,5);

}

module.exports={
    GetFeeds:getFeeds
}