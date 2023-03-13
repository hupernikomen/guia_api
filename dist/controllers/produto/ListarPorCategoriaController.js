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
exports.ListarPorCategoriaController = void 0;
const ListarPorCategoriaService_1 = require("../../services/produto/ListarPorCategoriaService");
class ListarPorCategoriaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaID = req.query.categoriaID;
            const listarPorCategoriaService = new ListarPorCategoriaService_1.ListarPorCategoriaService();
            const produto = yield listarPorCategoriaService.execute({
                categoriaID
            });
            return res.json(produto);
        });
    }
}
exports.ListarPorCategoriaController = ListarPorCategoriaController;
