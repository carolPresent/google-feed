'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Repository = require('./dbfunctions');
var Database = require('./database');

var getFeeds = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var feeds;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return Repository.getMany(Database.Feed, { IsOccupied: false });

                    case 2:
                        feeds = _context.sent;
                        return _context.abrupt('return', feeds.slice(0, 5));

                    case 4:
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

module.exports = {
    GetFeeds: getFeeds
};
//# sourceMappingURL=feed-service.js.map