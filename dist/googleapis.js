'use strict';

var getGoogleAccountFromCode = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(code) {
        var auth, data, tokens, plus, me, userGoogleId, userGoogleEmail;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        auth = createConnection();
                        _context.next = 3;
                        return auth.getToken(code);

                    case 3:
                        data = _context.sent;
                        tokens = data.tokens;

                        auth.setCredentials(tokens);
                        plus = getGooglePlusApi(auth);
                        _context.next = 9;
                        return plus.people.get({ userId: 'me' });

                    case 9:
                        me = _context.sent;
                        userGoogleId = me.data.id;
                        userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;
                        return _context.abrupt('return', {
                            id: userGoogleId,
                            email: userGoogleEmail,
                            tokens: tokens
                        });

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getGoogleAccountFromCode(_x) {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('googleapis'),
    google = _require.google;

var googleConfig = {
    clientId: '195776256689-t8nm0b0jh6a18lh45f0v7gg1kphf298n.apps.googleusercontent.com',
    clientSecret: 'j6k_Pk78T69PysWkx6UCLrH7',
    redirect: 'https://googlefeed.herokuapp.com/feed'
};

var defaultScope = ['https://www.googleapis.com/auth/plus.me', 'https://www.googleapis.com/auth/userinfo.email'];

function createConnection() {
    return new google.auth.OAuth2(googleConfig.clientId, googleConfig.clientSecret, googleConfig.redirect);
}

function getConnectionUrl(auth) {
    return auth.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: defaultScope
    });
}

function getGooglePlusApi(auth) {
    return google.plus({ version: 'v1', auth: auth });
}

function urlGoogle() {
    var auth = createConnection();
    var url = getConnectionUrl(auth);
    return url;
}

module.exports = {
    UrlGoogle: urlGoogle,
    GetGoogleAccountFromCode: getGoogleAccountFromCode
};
//# sourceMappingURL=googleapis.js.map