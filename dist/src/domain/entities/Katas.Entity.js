"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.katasEntity = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const katasEntity = () => {
    let katasSchema = new mongoose_1.default.Schema({
        name: String,
        description: String,
        level: Number,
        user: Object,
        date: Date,
        valoration: Number,
        attempts: Number
    });
    return mongoose_1.default.model("katas", katasSchema);
};
exports.katasEntity = katasEntity;
//# sourceMappingURL=Katas.Entity.js.map