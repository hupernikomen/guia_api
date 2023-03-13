"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.router);
// Para pegar o link da imagem (localhost:3333/files/produtos/nomedaimagem) 
app.use('/files', express_1.default.static(path_1.default.resolve(__dirname, '..', 'tmp')));
app.use((err, req, res, next) => {
    //Se cair em um erro...(mostrar mensagem amigavel)
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: "error",
        message: 'Internal server error.'
    });
});
app.listen(process.env.PORT, () => {
    console.log("Rodando - Porta 3333");
});
