"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CriarUsuarioController_1 = require("./controllers/usuario/CriarUsuarioController");
const CriarCategoriasController_1 = require("./controllers/categoria/CriarCategoriasController");
const CriarProdutoController_1 = require("./controllers/produto/CriarProdutoController");
const CriarRegiaoController_1 = require("./controllers/regiao/CriarRegiaoController");
const AuthUserController_1 = require("./controllers/auth/AuthUserController");
const MeUsuarioController_1 = require("./controllers/usuario/MeUsuarioController");
const AtualizarUsuarioController_1 = require("./controllers/usuario/AtualizarUsuarioController");
const AtualizarProdutoController_1 = require("./controllers/produto/AtualizarProdutoController");
const ListarCategoriasController_1 = require("./controllers/categoria/ListarCategoriasController");
const ListarUsuariosController_1 = require("./controllers/usuario/ListarUsuariosController");
const ListarProdutosController_1 = require("./controllers/produto/ListarProdutosController");
const ListarPorCategoriaController_1 = require("./controllers/produto/ListarPorCategoriaController");
const ListarRegioesController_1 = require("./controllers/regiao/ListarRegioesController");
const ListarUsuarioController_1 = require("./controllers/usuario/ListarUsuarioController");
const DetalheProdutoController_1 = require("./controllers/produto/DetalheProdutoController");
const DeleteProductController_1 = require("./controllers/produto/DeleteProductController");
const authenticator_1 = require("./middlewares/authenticator");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload_produtos = (0, multer_1.default)(multer_2.default.upload('./tmp/produtos'));
const upload_logo = (0, multer_1.default)(multer_2.default.upload('./tmp/logo'));
// Usuario
router.get('/usuarios', new ListarUsuariosController_1.ListarUsuariosController().handle); //Front [com filtro de regiao]
router.get('/usuario', new ListarUsuarioController_1.ListarUsuarioControler().handle); //Front
router.post('/login', new AuthUserController_1.AuthUsuarioController().handle); //Front
router.post('/usuario', new CriarUsuarioController_1.CriarUsuarioController().handle);
router.put('/usuario', authenticator_1.Authenticator, upload_logo.single('logo'), new AtualizarUsuarioController_1.AtualizarUsuarioController().handle);
router.get('/me', authenticator_1.Authenticator, new MeUsuarioController_1.MeUsuarioController().handle);
// Categoria
router.get('/categorias', new ListarCategoriasController_1.ListarCategoriasController().handle); //Front
router.post('/categoria', new CriarCategoriasController_1.CriarCategoriaController().handle);
// Produto
router.get('/produtos', new ListarProdutosController_1.ListarProdutosController().handle); //Front [com filtro de regiao]
router.get('/porcategoria', new ListarPorCategoriaController_1.ListarPorCategoriaController().handle); //Front [com filtro de regiao]
router.get('/detalhe', new DetalheProdutoController_1.DetalheProdutoController().handle);
router.post('/produto', authenticator_1.Authenticator, upload_produtos.array('files', 5), new CriarProdutoController_1.CriarProdutoController().handle);
router.delete('/produto', authenticator_1.Authenticator, new DeleteProductController_1.DeletarProdutoController().handle);
router.put('/produto', authenticator_1.Authenticator, new AtualizarProdutoController_1.AtualizarProdutoController().handle);
// Region
router.get('/regioes', new ListarRegioesController_1.ListarRegioesController().handle); //Front
router.post('/regiao', new CriarRegiaoController_1.CriarRegiaoController().handle);
