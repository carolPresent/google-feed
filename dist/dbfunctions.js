"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var saveOne = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(entity) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return entity.save();

                    case 3:
                        return _context.abrupt("return", _context.sent);

                    case 6:
                        _context.prev = 6;
                        _context.t0 = _context["catch"](0);
                        throw Error(_context.t0);

                    case 9:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 6]]);
    }));

    return function saveOne(_x) {
        return _ref.apply(this, arguments);
    };
}();

var saveMany = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(entityType, entityList) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return entityType.insertMany(entityList);

                    case 3:
                        return _context2.abrupt("return", _context2.sent);

                    case 6:
                        _context2.prev = 6;
                        _context2.t0 = _context2["catch"](0);
                        throw Error(_context2.t0);

                    case 9:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 6]]);
    }));

    return function saveMany(_x2, _x3) {
        return _ref2.apply(this, arguments);
    };
}();

var getByWhereClause = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(entity, whereClause) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return entity.$where(whereClause);

                    case 3:
                        return _context3.abrupt("return", _context3.sent);

                    case 6:
                        _context3.prev = 6;
                        _context3.t0 = _context3["catch"](0);
                        throw Error(_context3.t0);

                    case 9:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 6]]);
    }));

    return function getByWhereClause(_x4, _x5) {
        return _ref3.apply(this, arguments);
    };
}();

var getManyPopulated = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(entity, requestModel, populateQuery) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return entity.find(requestModel).populate(populateQuery);

                    case 3:
                        return _context4.abrupt("return", _context4.sent);

                    case 6:
                        _context4.prev = 6;
                        _context4.t0 = _context4["catch"](0);
                        throw Error(_context4.t0);

                    case 9:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[0, 6]]);
    }));

    return function getManyPopulated(_x6, _x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

var getAggregate = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(entity, aggregateQuery) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return entity.aggregate(aggregateQuery);

                    case 3:
                        return _context5.abrupt("return", _context5.sent);

                    case 6:
                        _context5.prev = 6;
                        _context5.t0 = _context5["catch"](0);
                        throw Error(_context5.t0);

                    case 9:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[0, 6]]);
    }));

    return function getAggregate(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var getMany = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(entity, requestModel) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.prev = 0;
                        _context6.next = 3;
                        return entity.find(requestModel);

                    case 3:
                        return _context6.abrupt("return", _context6.sent);

                    case 6:
                        _context6.prev = 6;
                        _context6.t0 = _context6["catch"](0);
                        throw Error(_context6.t0);

                    case 9:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, this, [[0, 6]]);
    }));

    return function getMany(_x11, _x12) {
        return _ref6.apply(this, arguments);
    };
}();

var findByIdAndRemove = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(entityType, id) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.prev = 0;
                        _context7.next = 3;
                        return entityType.findByIdAndRemove(id);

                    case 3:
                        return _context7.abrupt("return", _context7.sent);

                    case 6:
                        _context7.prev = 6;
                        _context7.t0 = _context7["catch"](0);
                        throw Error(_context7.t0);

                    case 9:
                    case "end":
                        return _context7.stop();
                }
            }
        }, _callee7, this, [[0, 6]]);
    }));

    return function findByIdAndRemove(_x13, _x14) {
        return _ref7.apply(this, arguments);
    };
}();

var getByIdPopulated = function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(entityiType, id, populateQuery) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        _context8.prev = 0;
                        _context8.next = 3;
                        return entityiType.findById(id).populate(populateQuery);

                    case 3:
                        return _context8.abrupt("return", _context8.sent);

                    case 6:
                        _context8.prev = 6;
                        _context8.t0 = _context8["catch"](0);
                        throw Error(_context8.t0);

                    case 9:
                    case "end":
                        return _context8.stop();
                }
            }
        }, _callee8, this, [[0, 6]]);
    }));

    return function getByIdPopulated(_x15, _x16, _x17) {
        return _ref8.apply(this, arguments);
    };
}();

var getById = function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(entityType, id) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        _context9.prev = 0;
                        _context9.next = 3;
                        return entityType.findById(id);

                    case 3:
                        return _context9.abrupt("return", _context9.sent);

                    case 6:
                        _context9.prev = 6;
                        _context9.t0 = _context9["catch"](0);
                        throw Error(_context9.t0);

                    case 9:
                    case "end":
                        return _context9.stop();
                }
            }
        }, _callee9, this, [[0, 6]]);
    }));

    return function getById(_x18, _x19) {
        return _ref9.apply(this, arguments);
    };
}();

var getOne = function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(entityType, requestModel) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        _context10.prev = 0;
                        _context10.next = 3;
                        return entityType.findOne(requestModel);

                    case 3:
                        return _context10.abrupt("return", _context10.sent);

                    case 6:
                        _context10.prev = 6;
                        _context10.t0 = _context10["catch"](0);
                        throw Error(_context10.t0);

                    case 9:
                    case "end":
                        return _context10.stop();
                }
            }
        }, _callee10, this, [[0, 6]]);
    }));

    return function getOne(_x20, _x21) {
        return _ref10.apply(this, arguments);
    };
}();

var updateMany = function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(entityType, requestModel, updateModel) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        _context11.prev = 0;
                        _context11.next = 3;
                        return entityType.updateMany(requestModel, { $set: updateModel });

                    case 3:
                        return _context11.abrupt("return", _context11.sent);

                    case 6:
                        _context11.prev = 6;
                        _context11.t0 = _context11["catch"](0);
                        throw Error(_context11.t0);

                    case 9:
                    case "end":
                        return _context11.stop();
                }
            }
        }, _callee11, this, [[0, 6]]);
    }));

    return function updateMany(_x22, _x23, _x24) {
        return _ref11.apply(this, arguments);
    };
}();

var count = function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(entityType, condition) {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
                switch (_context12.prev = _context12.next) {
                    case 0:
                        _context12.prev = 0;
                        _context12.next = 3;
                        return entityType.countDocuments(condition);

                    case 3:
                        return _context12.abrupt("return", _context12.sent);

                    case 6:
                        _context12.prev = 6;
                        _context12.t0 = _context12["catch"](0);
                        throw Error(_context12.t0);

                    case 9:
                    case "end":
                        return _context12.stop();
                }
            }
        }, _callee12, this, [[0, 6]]);
    }));

    return function count(_x25, _x26) {
        return _ref12.apply(this, arguments);
    };
}();

var any = function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(entityType, condition) {
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
                switch (_context13.prev = _context13.next) {
                    case 0:
                        _context13.prev = 0;
                        _context13.next = 3;
                        return entityType.count(condition);

                    case 3:
                        return _context13.abrupt("return", _context13.sent);

                    case 6:
                        _context13.prev = 6;
                        _context13.t0 = _context13["catch"](0);
                        throw Error(_context13.t0);

                    case 9:
                    case "end":
                        return _context13.stop();
                }
            }
        }, _callee13, this, [[0, 6]]);
    }));

    return function any(_x27, _x28) {
        return _ref13.apply(this, arguments);
    };
}();

var deleteMany = function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(entityType, condition) {
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
                switch (_context14.prev = _context14.next) {
                    case 0:
                        _context14.prev = 0;
                        _context14.next = 3;
                        return entityType.deleteMany(condition);

                    case 3:
                        return _context14.abrupt("return", _context14.sent);

                    case 6:
                        _context14.prev = 6;
                        _context14.t0 = _context14["catch"](0);
                        throw Error(_context14.t0);

                    case 9:
                    case "end":
                        return _context14.stop();
                }
            }
        }, _callee14, this, [[0, 6]]);
    }));

    return function deleteMany(_x29, _x30) {
        return _ref14.apply(this, arguments);
    };
}();

var bulkWrite = function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(entityType, ops) {
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
                switch (_context15.prev = _context15.next) {
                    case 0:
                        _context15.prev = 0;
                        _context15.next = 3;
                        return entityType.bulkWrite(ops);

                    case 3:
                        return _context15.abrupt("return", _context15.sent);

                    case 6:
                        _context15.prev = 6;
                        _context15.t0 = _context15["catch"](0);
                        throw Error(_context15.t0);

                    case 9:
                    case "end":
                        return _context15.stop();
                }
            }
        }, _callee15, this, [[0, 6]]);
    }));

    return function bulkWrite(_x31, _x32) {
        return _ref15.apply(this, arguments);
    };
}();

module.exports = {
    saveOne: saveOne,
    getByWhereClause: getByWhereClause,
    getMany: getMany,
    saveMany: saveMany,
    findByIdAndRemove: findByIdAndRemove,
    getById: getById,
    getOne: getOne,
    updateMany: updateMany,
    count: count,
    deleteMany: deleteMany,
    any: any,
    getManyPopulated: getManyPopulated,
    bulkWrite: bulkWrite,
    getAggregate: getAggregate,
    getByIdPopulated: getByIdPopulated
};
//# sourceMappingURL=dbfunctions.js.map