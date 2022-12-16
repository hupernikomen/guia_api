/*
  Warnings:

  - The `imagens` column on the `produtos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "imagens",
ADD COLUMN     "imagens" TEXT[];
