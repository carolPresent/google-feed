const express=require('express');
const bodyParser=require('body-parser');
const http=require('http');

var app=express();

app.use(bodyParser.json());

var portNumber=process.env.PORT || 4242;
var database=require('./database');
var googleapis=require('./googleapis');
database.Init("mongodb://localhost:27017/GoogleFeed");
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

app.get('/getCreds',async (req,res)=>{

    try
    {
        res.send(await googleapis.GetGoogleAccountFromCode(req.query.code));
    }
    catch(err)
    {
        resn.status(500).send("Internal server error");
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
