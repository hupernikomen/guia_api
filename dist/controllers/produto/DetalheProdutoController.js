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
exports.DetalheProdutoController = void 0;
const DetalheProdutoService_1 = require("../../services/produto/DetalheProdutoService");
class DetalheProdutoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoID = req.query.produtoID;
            const detalheProdutoService = new DetalheProdutoService_1.DetalheProdutoService();
            const produto = yield detalheProdutoService.execute({
                produtoID
            });
            return res.json(produto);
        });
    }
}
exports.DetalheProdutoController = DetalheProdutoController;
