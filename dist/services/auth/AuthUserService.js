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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUsuarioService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthUsuarioService {
    execute({ email, senha }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield prisma_1.default.usuario.findFirst({
                where: {
                    email: email
                }
            });
            if (!usuario) {
                throw new Error("Usuario ou Senha Incorreta");
            }
            const comparePassword = yield (0, bcryptjs_1.compare)(senha, usuario.senha);
            if (!comparePassword) {
                throw new Error("Usuario ou Senha Incorreta");
            }
            const token = (0, jsonwebtoken_1.sign)({ email: usuario.email }, process.env.JWT_SECRET, { subject: usuario.id });
            return {
                id: usuario.id,
                email: usuario.email,
                token: token
            };
        });
    }
}
exports.AuthUsuarioService = AuthUsuarioService;
