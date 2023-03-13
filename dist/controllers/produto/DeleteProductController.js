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
exports.DeletarProdutoController = void 0;
const DeletarProdutoService_1 = require("../../services/produto/DeletarProdutoService");
class DeletarProdutoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoID = req.query.produtoID;
            const deletarProduto = new DeletarProdutoService_1.DeletarProdutoService();
            yield deletarProduto.execute({
                produtoID
            });
            return res.status(200).json({
                message: "Fique tranquilo! Já excluimos seu produto"
            });
        });
    }
}
exports.DeletarProdutoController = DeletarProdutoController;
