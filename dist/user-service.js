'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Repository = require('./dbfunctions');
var Database = require('./database');

var saveLoginDetails = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var newTokenModel, token, user, newUserModel;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        newTokenModel = new Database.Token({
                            AccessToken: data.access_token,
                            RefreshToken: data.refresh_token,
                            Scope: data.scope,
                            TokenType: data.token_type,
                            IdToken: data.id_token,
                            ExpiryDate: data.expiry_date
                        });
                        _context.next = 3;
                        return Repository.saveOne(newTokenModel);

                    case 3:
                        token = _context.sent;
                        _context.next = 6;
                        return Repository.getOne(Database.User, { Id: data.id, Email: data.email });

                    case 6:
                        user = _context.sent;

                        if (!(user == null)) {
                            _context.next = 13;
                            break;
                        }

                        newUserModel = new Database.User({
                            Id: data.id,
                            Email: data.email,
                            Token: token._id
                        });
                        _context.next = 11;
                        return Repository.saveOne(newUserModel);

                    case 11:
                        _context.next = 18;
                        break;

                    case 13:
                        _context.next = 15;
                        return Repository.deleteMany(Database.Token, { _id: user.Token });

                    case 15:

                        user.Token = token._id;

                        _context.next = 18;
                        return user.save();

                    case 18:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function saveLoginDetails(_x) {
        return _ref.apply(this, arguments);
    };
}();

module.exports = {
    SaveLoginDetails: saveLoginDetails
};
//# sourceMappingURL=user-service.js.map