/*
  Warnings:

  - You are about to drop the column `files` on the `produtos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "files",
ADD COLUMN     "imagens" TEXT[];
