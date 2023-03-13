"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
// Middleware que verifica se usuario é autenticado e libera rota
function Admin(req, res, next) {
    // Receber o Token
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try {
        const { email } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        if (email) {
            return next();
        }
    }
    catch (error) {
        return res.status(401).end();
    }
}
exports.Admin = Admin;
