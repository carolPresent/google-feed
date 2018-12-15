'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var init = function init(dbLink) {
    mongoose.connect(dbLink, { useNewUrlParser: true }).catch(function (err) {
        logger.WriteToLog('Error occurred while establishing connection to mongo db ' + err);
    });
};

var FeedSchema = new Schema({
    Name: {
        type: String,
        trim: true,
        required: true
    },
    Users: [{
        type: Schema.ObjectId,
        ref: 'User'
    }]
});

var Feed = mongoose.model("Feed", FeedSchema);

module.exports = {
    Init: init,
    Feed: Feed
};
//# sourceMappingURL=database.js.map