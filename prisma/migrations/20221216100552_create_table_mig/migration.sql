/*
  Warnings:

  - You are about to drop the column `bairro` on the `dados_usuario` table. All the data in the column will be lost.
  - You are about to drop the column `cidade` on the `dados_usuario` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `dados_usuario` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `dados_usuario` table. All the data in the column will be lost.
  - You are about to drop the column `latlng` on the `dados_usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "dados_usuario" DROP COLUMN "bairro",
DROP COLUMN "cidade",
DROP COLUMN "endereco",
DROP COLUMN "estado",
DROP COLUMN "latlng";

-- CreateTable
CREATE TABLE "localizacao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL DEFAULT '',
    "bairro" TEXT NOT NULL DEFAULT '',
    "cidade" TEXT NOT NULL DEFAULT 'Teresina',
    "estado" TEXT NOT NULL DEFAULT 'Piaui',
    "latlng" TEXT NOT NULL DEFAULT '0,0',
    "usuarioID" TEXT NOT NULL,

    CONSTRAINT "localizacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "localizacao" ADD CONSTRAINT "localizacao_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
