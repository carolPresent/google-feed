'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.use(bodyParser.json());

var portNumber = process.env.PORT || 4242;
var database = require('./database');
var googleapis = require('./googleapis');
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

app.get('/heartbeat', function (req, res) {
    res.send('Api is live');
});

app.get('/signinurl', function (req, res) {
    res.send(googleapis.UrlGoogle());
});

app.get('/getCreds', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.t0 = res;
                        _context.next = 4;
                        return googleapis.GetGoogleAccountFromCode(req.query.code);

                    case 4:
                        _context.t1 = _context.sent;

                        _context.t0.send.call(_context.t0, _context.t1);

                        _context.next = 11;
                        break;

                    case 8:
                        _context.prev = 8;
                        _context.t2 = _context['catch'](0);

                        resn.status(500).send("Internal server error");

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 8]]);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

app.get("/", function (req, res) {
    res.sendFile("/index.html", { root: __dirname });
});

var server = http.createServer(app);

server.listen(portNumber, function () {
    try {
        console.log('Server is up and running on port: ' + portNumber);
    } catch (err) {
        Utility.Logger.WriteToLog(err);
        throw Error(err);
    }
});
//# sourceMappingURL=app.js.map