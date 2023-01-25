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
exports.goodByeController = void 0;
const logger_1 = require("../utils/logger");
class goodByeController {
    getMessageDate(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (name === undefined) {
                return {
                    message: "Good bye World!",
                    date: new Date
                };
            }
            (0, logger_1.LogSuccess)('[/api/goodbye] Get Request');
            return {
                message: `Good bye ${name}`,
                date: new Date
            };
        });
    }
}
exports.goodByeController = goodByeController;
//# sourceMappingURL=goodByeController.js.map