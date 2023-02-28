import { Router, Request, Response } from 'express';
import multer from 'multer';

import { CriarUsuarioController } from './controllers/usuario/CriarUsuarioController'
import { CriarCategoriaController } from './controllers/categoria/CriarCategoriasController';
import { CriarProdutoController } from './controllers/produto/CriarProdutoController';
import { CriarRegiaoController } from './controllers/regiao/CriarRegiaoController';

import { AuthUsuarioController } from './controllers/auth/AuthUserController'
import { MeUsuarioController } from './controllers/usuario/MeUserController';

import { AtualizarUsuarioController } from './controllers/usuario/AtualizarUsuarioController';
import { AtualizarFormatoController } from './controllers/formato/AtualizarFormatoController';
import { AtualizarLocalizacaoController } from './controllers/localizacao/UpdateUserLocaleController';
import { AtualizarProdutoController } from './controllers/produto/AtualizarProdutoController';

import { ListarCategoriasController } from './controllers/categoria/ListarCategoriasController';
import { ListarUsuariosController } from './controllers/usuario/ListarUsuariosController';
import { ListarProdutosController } from './controllers/produto/ListarProdutosController';
import { ListarPorCategoriaController } from './controllers/produto/ListarPorCategoriaController';
import { ListarRegioesController } from './controllers/regiao/ListarRegioesController';
import { ListarUsuarioControler } from './controllers/usuario/ListarUsuarioController';

import { DetalheProdutoController } from './controllers/produto/DetalheProdutoController';

import { DeletarProdutoController } from './controllers/produto/DeleteProductController';

import { Authenticator } from './middlewares/authenticator';

import uploadConfig from './config/multer'

const router = Router();

const upload_produtos = multer(uploadConfig.upload('./tmp/produtosImg'))
const upload_logo = multer(uploadConfig.upload('./tmp/logo'))


// Usuario
router.get('/usuarios', new ListarUsuariosController().handle)  //Front [com filtro de regiao]
router.get('/usuario', new ListarUsuarioControler().handle)  //Front
router.post('/login', new AuthUsuarioController().handle)  //Front

router.post('/usuario', new CriarUsuarioController().handle)
router.put('/usuario', Authenticator, upload_logo.single('logo'), new AtualizarUsuarioController().handle)
router.put('/formato', Authenticator, new AtualizarFormatoController().handle)
router.get('/me', Authenticator, new MeUsuarioController().handle)


// Categoria
router.get('/categorias', new ListarCategoriasController().handle)  //Front

router.post('/categoria', new CriarCategoriaController().handle)


// Produto
router.get('/produtos', new ListarProdutosController().handle)  //Front [com filtro de regiao]
router.get('/porcategoria', new ListarPorCategoriaController().handle)  //Front [com filtro de regiao]
router.get('/detalhe', new DetalheProdutoController().handle)

router.post('/produto', Authenticator, upload_produtos.array('files',5), new CriarProdutoController().handle)
router.delete('/produto', Authenticator, new DeletarProdutoController().handle)
router.put('/produto', Authenticator, new AtualizarProdutoController().handle)


// Region
router.get('/regioes', new ListarRegioesController().handle) //Front

router.post('/regiao', new CriarRegiaoController().handle)
router.put('/localizacao', Authenticator, new AtualizarLocalizacaoController().handle)


export { router };