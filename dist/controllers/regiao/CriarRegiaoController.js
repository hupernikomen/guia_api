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
exports.CriarRegiaoController = void 0;
const CriarRegiaoService_1 = require("../../services/regiao/CriarRegiaoService");
class CriarRegiaoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome } = req.body;
            const criarRegiaoService = new CriarRegiaoService_1.CreateRegionService();
            const region = yield criarRegiaoService.execute({
                nome
            });
            return res.json(region);
        });
    }
}
exports.CriarRegiaoController = CriarRegiaoController;
