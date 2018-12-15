var Repository=require('./dbfunctions');
var Database=require('./database');

var getFeeds=async ()=>{

    let feeds=await Repository.getMany(Database.Feed,{IsOccupied:false});

    feeds=feeds.slice(0,5);

    for(let index=0;index<feeds.length;index++){
        feeds[index].IsOccupied=true;

        await feeds[index].save();
    }

    return feeds;

}

var unlockFeeds=async (feedIds)=>{

    for(let index=0;index<feedIds.length;index++){
        feedIds[index]=Database.CreateObjectId(feedIds[index]);
    }

    let feeds=await Repository.getMany(Database.Feed,{_id:{$in:feedIds}});

    for(let index=0;index<feeds.length;index++){
        feeds[index].IsOccupied=false;

        await feeds[index].save();
    }

    return "Unloacked successfully";

}

var addFeed=async(feed)=>{

    var newFeedModel=new Database.Feed({
        Data:feed.Data,
        Type:feed.Type
    });

    let feedAddStatus=await Repository.saveOne(newFeedModel);

    return "Added feed successfully";

}

module.exports={
    GetFeeds:getFeeds,
    UnlockFeeds:unlockFeeds,
    AddFeed:addFeed
}