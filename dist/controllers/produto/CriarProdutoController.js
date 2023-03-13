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
exports.CriarProdutoController = void 0;
const CriarProdutoService_1 = require("../../services/produto/CriarProdutoService");
class CriarProdutoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const criarProdutoService = new CriarProdutoService_1.CriarProdutoService();
            const { nome, descricao, preco, oferta, tamanho, cor, categoriaID, usuarioID } = req.body;
            if (!req.files) {
                throw new Error("Ops.. algo deu errado!");
            }
            else {
                const files = req.files;
                const produto = yield criarProdutoService.execute({
                    nome,
                    descricao,
                    preco,
                    oferta,
                    tamanho,
                    cor,
                    imagens: files,
                    categoriaID,
                    usuarioID,
                });
                return res.status(200).json(produto);
            }
        });
    }
}
exports.CriarProdutoController = CriarProdutoController;
