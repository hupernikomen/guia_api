/*
  Warnings:

  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `regions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userFormats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userLocale` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_categoryID_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_userID_fkey";

-- DropForeignKey
ALTER TABLE "userData" DROP CONSTRAINT "userData_userID_fkey";

-- DropForeignKey
ALTER TABLE "userFormats" DROP CONSTRAINT "userFormats_userID_fkey";

-- DropForeignKey
ALTER TABLE "userLocale" DROP CONSTRAINT "userLocale_userID_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_regionID_fkey";

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "products";

-- DropTable
DROP TABLE "regions";

-- DropTable
DROP TABLE "userData";

-- DropTable
DROP TABLE "userFormats";

-- DropTable
DROP TABLE "userLocale";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT false,
    "regiaoID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formatos" (
    "id" TEXT NOT NULL,
    "entrega" BOOLEAN NOT NULL DEFAULT false,
    "parcela" TEXT NOT NULL DEFAULT '0',
    "usuarioID" TEXT NOT NULL,

    CONSTRAINT "formatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dados" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL DEFAULT '',
    "telefone" TEXT NOT NULL DEFAULT '',
    "bio" TEXT NOT NULL DEFAULT '',
    "usuarioID" TEXT NOT NULL,

    CONSTRAINT "dados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "localizacoes" (
    "id" TEXT NOT NULL,
    "endereco" TEXT NOT NULL DEFAULT '',
    "bairro" TEXT NOT NULL DEFAULT '',
    "cidade" TEXT NOT NULL DEFAULT 'Teresina',
    "estado" TEXT NOT NULL DEFAULT 'Piaui',
    "latlng" TEXT NOT NULL DEFAULT '0,0',
    "usuarioID" TEXT NOT NULL,

    CONSTRAINT "localizacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "oferta" TEXT NOT NULL DEFAULT '',
    "tamanho" TEXT[],
    "cor" TEXT[],
    "files" JSONB[],
    "usuarioID" TEXT NOT NULL,
    "categoriaID" TEXT NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regioes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "regioes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "formatos_usuarioID_key" ON "formatos"("usuarioID");

-- CreateIndex
CREATE UNIQUE INDEX "dados_usuarioID_key" ON "dados"("usuarioID");

-- CreateIndex
CREATE UNIQUE INDEX "localizacoes_usuarioID_key" ON "localizacoes"("usuarioID");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_regiaoID_fkey" FOREIGN KEY ("regiaoID") REFERENCES "regioes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formatos" ADD CONSTRAINT "formatos_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dados" ADD CONSTRAINT "dados_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "localizacoes" ADD CONSTRAINT "localizacoes_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_categoriaID_fkey" FOREIGN KEY ("categoriaID") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
