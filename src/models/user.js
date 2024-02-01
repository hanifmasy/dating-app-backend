"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    likes: [{ type: String }],
    passes: [{ type: String }],
    isPremium: { type: Boolean, default: false },
    premiumFeatures: [{ type: String }],
    settings: { type: mongoose_1.Schema.Types.Mixed },
});
var UserClass = /** @class */ (function () {
    // Constructor
    function UserClass(user) {
        this.username = user.username;
        this.email = user.email;
        this.password = user.password;
        this.likes = user.likes || [];
        this.passes = user.passes || [];
        this.isPremium = user.isPremium || false;
        this.premiumFeatures = user.premiumFeatures || [];
        this.settings = user.settings || {};
    }
    // Additional methods
    UserClass.findOneByUsername = function (username) {
        return this.findOne({ username: username });
    };
    UserClass.findByIdWithLikesAndPasses = function (id) {
        return this.findById(id).select('likes passes');
    };
    UserClass.findPremiumUsers = function () {
        return this.find({ isPremium: true });
    };
    return UserClass;
}());
userSchema.loadClass(UserClass);
var User = (0, mongoose_1.model)('User', userSchema);
exports.User = User;
