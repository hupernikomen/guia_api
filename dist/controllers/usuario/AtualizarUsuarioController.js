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
exports.AtualizarUsuarioController = void 0;
const AtualizarUsuarioService_1 = require("../../services/usuario/AtualizarUsuarioService");
class AtualizarUsuarioController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioID = req.query.usuarioID;
            const { ativo, nome, telefone, bio, endereco, bairro, cidade, latlng, entrega } = req.body;
            const file = req.file;
            const boo = entrega === 'true';
            const atualizarUsuarioService = new AtualizarUsuarioService_1.AtualizarUsuarioService();
            const data = yield atualizarUsuarioService.execute({
                usuarioID,
                ativo,
                logo: file,
                nome,
                telefone,
                bio,
                endereco,
                bairro,
                cidade,
                latlng,
                entrega: boo
            });
            return res.json(data);
        });
    }
}
exports.AtualizarUsuarioController = AtualizarUsuarioController;
