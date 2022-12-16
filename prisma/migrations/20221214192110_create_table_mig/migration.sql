/*
  Warnings:

  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - Added the required column `senha` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "password",
ADD COLUMN     "senha" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "dados_usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "latlng" TEXT NOT NULL DEFAULT '0,0',
    "usuarioID" TEXT NOT NULL,

    CONSTRAINT "dados_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "oferta" TEXT NOT NULL,
    "usuarioID" TEXT NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dados_usuario_usuarioID_key" ON "dados_usuario"("usuarioID");

-- AddForeignKey
ALTER TABLE "dados_usuario" ADD CONSTRAINT "dados_usuario_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
