/*
  Warnings:

  - You are about to drop the `categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `config` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dados_usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `localizacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `produtos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "config" DROP CONSTRAINT "config_usuarioID_fkey";

-- DropForeignKey
ALTER TABLE "dados_usuario" DROP CONSTRAINT "dados_usuario_usuarioID_fkey";

-- DropForeignKey
ALTER TABLE "localizacao" DROP CONSTRAINT "localizacao_usuarioID_fkey";

-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_categoriaID_fkey";

-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_usuarioID_fkey";

-- DropTable
DROP TABLE "categoria";

-- DropTable
DROP TABLE "config";

-- DropTable
DROP TABLE "dados_usuario";

-- DropTable
DROP TABLE "localizacao";

-- DropTable
DROP TABLE "produtos";

-- DropTable
DROP TABLE "usuario";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userFormats" (
    "id" TEXT NOT NULL,
    "delivery" BOOLEAN NOT NULL DEFAULT false,
    "portion" TEXT NOT NULL DEFAULT '0',
    "userID" TEXT NOT NULL,

    CONSTRAINT "userFormats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userDatas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "bio" TEXT NOT NULL DEFAULT '',
    "userID" TEXT NOT NULL,

    CONSTRAINT "userDatas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userRegions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL DEFAULT '',
    "district" TEXT NOT NULL DEFAULT '',
    "city" TEXT NOT NULL DEFAULT 'Teresina',
    "state" TEXT NOT NULL DEFAULT 'Piaui',
    "latlng" TEXT NOT NULL DEFAULT '0,0',
    "userID" TEXT NOT NULL,

    CONSTRAINT "userRegions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "off" TEXT NOT NULL,
    "size" TEXT[],
    "color" TEXT[],
    "image" JSONB NOT NULL,
    "userID" TEXT NOT NULL,
    "categoryID" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userFormats_userID_key" ON "userFormats"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "userDatas_userID_key" ON "userDatas"("userID");

-- AddForeignKey
ALTER TABLE "userFormats" ADD CONSTRAINT "userFormats_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userDatas" ADD CONSTRAINT "userDatas_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userRegions" ADD CONSTRAINT "userRegions_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
