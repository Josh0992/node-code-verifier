"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.UserController = void 0;
const tsoa_1 = require("tsoa");
const logger_1 = require("../utils/logger");
//ORM - User
const User_orm_1 = require("../domain/orm/User.orm");
let UserController = class UserController {
    /**
     * Endpoint to retrieve the users in the collections "Users" of DB
     * @param {string} id id of user to retrieve (optional)
     * @returns All user or user id
    */
    getUsers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = '';
            if (id) {
                (0, logger_1.LogSuccess)(`[/api/users?id] Get user by id: ${id}`);
                response = yield (0, User_orm_1.getUserByID)(id);
            }
            else {
                (0, logger_1.LogSuccess)('[/api/users] Get all users request');
                response = yield (0, User_orm_1.getAllUsers)();
            }
            return response;
        });
    }
    /**
     * Endpoint to delete the users in the collections "Users" of DB
     * @param {string} id id of user to delete (optional)
     * @returns message informing if deletion was correct.
    */
    deleteUsers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = '';
            if (id) {
                (0, logger_1.LogSuccess)(`[/api/users?id] Delete user by id: ${id}`);
                yield (0, User_orm_1.deleteUserByID)(id).then((r) => {
                    response = {
                        message: `user with ID ${id} deleted successfully`
                    };
                });
            }
            else {
                (0, logger_1.LogWarning)('[/api/users] Delete users request without ID');
                response = {
                    message: `Please, provide an ID to remove from database`
                };
            }
            return response;
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = '';
            yield (0, User_orm_1.createUser)(user).then((r) => {
                (0, logger_1.LogSuccess)(`[/api/users] create user ${user}`);
                response = {
                    message: `user created susccessfully: ${user.name}`
                };
            });
            return response;
        });
    }
    updateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = '';
            if (id) {
                (0, logger_1.LogSuccess)(`[/api/users] update user by id: ${id}`);
                yield (0, User_orm_1.updateUserById)(id, user).then((r) => {
                    response = {
                        message: `user with ID ${id} update successfully`
                    };
                });
            }
            else {
                (0, logger_1.LogWarning)('[/api/users] update users request without ID');
                response = {
                    message: `Please, provide an ID to update an existing user`
                };
            }
            return response;
        });
    }
};
__decorate([
    (0, tsoa_1.Get)("/"),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, tsoa_1.Delete)("/"),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUsers", null);
__decorate([
    (0, tsoa_1.Post)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, tsoa_1.Put)("/"),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
UserController = __decorate([
    (0, tsoa_1.Route)("/api/users"),
    (0, tsoa_1.Tags)("IUserController")
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map