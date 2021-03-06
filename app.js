const express=require('express');
const bodyParser=require('body-parser');
const http=require('http');

var app=express();

app.use(bodyParser.json());

var portNumber=process.env.PORT || 4242;
var database=require('./database');
var googleapis=require('./googleapis');
var feedService=require('./feed-service');
var mongoDbUri="mongodb://heroku_r07skxkq:f5q4s0fnq1hcpep0lf3n76omnh@ds117849.mlab.com:17849/heroku_r07skxkq";
//mongoDbUri="mongodb://localhost:27017/GoogleFeed";
database.Init(mongoDbUri);
/*
app.use(async (req,res,next)=>{

    try
    {
        var requestData=`Request:\nUrl:${req.url}\nMethod:${req.method}\nBody:${req.body}\n*******************************`;

        Utility.Logger.WriteToLog(requestData);
        let response=await Services.Gatekeeper.Serve(req);

        if(!Utility.Dto.IsGoodResponse(response)){
            res.send(response);
            return;
        }

        next();
    }
    catch(err)
    {
        Utility.Logger.WriteToLog(err);
        res.status(500).send("Internal server error");
    }

});
*/

app.get('/heartbeat',(req,res)=>{
    res.send('Api is live');
});

app.get('/signinurl',(req,res)=>{
    res.send(googleapis.UrlGoogle());
});

app.get('/feed',(req,res)=>{
    res.sendFile("/feed.html",{root:__dirname});
});

app.get('/temp',(req,res)=>{
    res.sendFile("/temp.html",{root:__dirname});
});

app.post('/feed',async (req,res)=>{

    try
    {
        res.send(await feedService.AddFeed(req.body));
    }
    catch(err)
    {
        res.status(500).send("Internal server error");
    }

});

app.put('/feed',async (req,res)=>{
    try
    {
        res.send(await feedService.UnlockFeeds(req.body.FeedIds));
    }
    catch(err)
    {
        res.status(500).send("Internal server error");
    }
});

app.post('/loginSave',async (req,res)=>{

    try
    {
        res.send(await googleapis.GetGoogleAccountFromCode(req.query.code));
    }
    catch(err)
    {
        res.status(500).send("Internal server error");
    }

});

app.get("/",(req,res)=>{
    res.sendFile("/index.html",{root:__dirname});
});

var server=http.createServer(app);

server.listen(portNumber, () => {
    try
    {
        console.log(`Server is up and running on port: ${portNumber}`);
    }
    catch(err)
    {
        Utility.Logger.WriteToLog(err);
        throw Error(err);
    }

});
