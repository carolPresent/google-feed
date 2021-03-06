'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Repository = require('./dbfunctions');
var Database = require('./database');

var getFeeds = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var feeds, index;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return Repository.getMany(Database.Feed, { IsOccupied: false });

                    case 2:
                        feeds = _context.sent;


                        feeds = feeds.slice(0, 5);

                        index = 0;

                    case 5:
                        if (!(index < feeds.length)) {
                            _context.next = 12;
                            break;
                        }

                        feeds[index].IsOccupied = true;

                        _context.next = 9;
                        return feeds[index].save();

                    case 9:
                        index++;
                        _context.next = 5;
                        break;

                    case 12:
                        return _context.abrupt('return', feeds);

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getFeeds() {
        return _ref.apply(this, arguments);
    };
}();

var unlockFeeds = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(feedIds) {
        var feeds, index, _index;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        feeds = void 0;

                        if (!(feedIds[0] == "*")) {
                            _context2.next = 7;
                            break;
                        }

                        _context2.next = 4;
                        return Repository.getMany(Database.Feed, {});

                    case 4:
                        feeds = _context2.sent;
                        _context2.next = 11;
                        break;

                    case 7:
                        for (index = 0; index < feedIds.length; index++) {
                            feedIds[index] = Database.CreateObjectId(feedIds[index]);
                        }

                        _context2.next = 10;
                        return Repository.getMany(Database.Feed, { _id: { $in: feedIds } });

                    case 10:
                        feeds = _context2.sent;

                    case 11:
                        _index = 0;

                    case 12:
                        if (!(_index < feeds.length)) {
                            _context2.next = 19;
                            break;
                        }

                        feeds[_index].IsOccupied = false;

                        _context2.next = 16;
                        return feeds[_index].save();

                    case 16:
                        _index++;
                        _context2.next = 12;
                        break;

                    case 19:
                        return _context2.abrupt('return', "Unloacked successfully");

                    case 20:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function unlockFeeds(_x) {
        return _ref2.apply(this, arguments);
    };
}();

var addFeed = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(feed) {
        var newFeedModel, feedAddStatus;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        newFeedModel = new Database.Feed({
                            Data: feed.Data,
                            Type: feed.Type
                        });
                        _context3.next = 3;
                        return Repository.saveOne(newFeedModel);

                    case 3:
                        feedAddStatus = _context3.sent;
                        return _context3.abrupt('return', "Added feed successfully");

                    case 5:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function addFeed(_x2) {
        return _ref3.apply(this, arguments);
    };
}();

module.exports = {
    GetFeeds: getFeeds,
    UnlockFeeds: unlockFeeds,
    AddFeed: addFeed
};
//# sourceMappingURL=feed-service.js.map