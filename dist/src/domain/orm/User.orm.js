"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const User_Entity_1 = require("../entities/User.Entity");
const logger_1 = require("../../utils/logger");
//CRUD 
/**
 * Method to obtein all users from Collection "Users" in mongo Server
 */
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userModel = (0, User_Entity_1.userEntity)();
        //Search all users
        return yield userModel.find({ isDelete: false });
    }
    catch (error) {
        (0, logger_1.LogError)(`[ORM ERROR]: Getting all users: ${error}`);
    }
});
exports.getAllUsers = getAllUsers;
//TODO:
// - Get user by ID
// - Get user by email
// - Delete user by ID
// - Create new user
// - update user by ID
//# sourceMappingURL=User.orm.js.map