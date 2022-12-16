import { Router, Request, Response } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController'
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { CreateRegionController } from './controllers/region/CreateRegionController';


import { AuthUsuarioController } from './controllers/auth/AuthUserController'
import { MeUserController } from './controllers/user/MeUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { UpdateUserFormatController } from './controllers/userFormat/UpdateUserFormatController';
import { UpdateUserLocaleController } from './controllers/userLocale/UpdateUserLocaleController';
import { UpdateProductController } from './controllers/product/UpdateProductController';

import { ListCategoriesController } from './controllers/category/ListCategoriesController';
import { ListUsersController } from './controllers/user/ListUsersController';
import { ListProductsController } from './controllers/product/ListProductsController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import { DeleteProductController } from './controllers/product/DeleteProductController';

import { Authenticator } from './middlewares/authenticator';

import uploadConfig from './config/multer'

const router = Router();

const upload_products = multer(uploadConfig.upload('./tmp/products'))
const upload_banners = multer(uploadConfig.upload('./tmp/banners'))
const upload_categories = multer(uploadConfig.upload('./tmp/categorias'))
const upload_avatar = multer(uploadConfig.upload('./tmp/logo'))


// Usuario
router.post('/user',Authenticator, new CreateUserController().handle)
router.put('/user', Authenticator, new UpdateUserController().handle)
router.get('/users', new ListUsersController().handle)  //Front

router.post('/login', new AuthUsuarioController().handle)  //Front
router.put('/format', Authenticator, new UpdateUserFormatController().handle)
router.get('/me', Authenticator, new MeUserController().handle)


// Categoria
router.get('/categories', new ListCategoriesController().handle)  //Front
router.post('/category', Authenticator, new CreateCategoryController().handle)


// Produto
router.post('/product', Authenticator, upload_products.fields([{ name: "img", maxCount: 5 }]), new CreateProductController().handle)
router.delete('/product', Authenticator, new DeleteProductController().handle)
router.get('/products', new ListProductsController().handle)  //Front
router.get('/bycategory', new ListByCategoryController().handle)  //Front
router.put('/product', Authenticator, new UpdateProductController().handle)


// Region
router.post('/region', Authenticator, new CreateRegionController().handle)
router.put('/locale', Authenticator, new UpdateUserLocaleController().handle)



export { router };