/*
  Warnings:

  - You are about to drop the column `ativo` on the `dados_usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "dados_usuario" DROP COLUMN "ativo";

-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT false;
