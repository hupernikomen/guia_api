/*
  Warnings:

  - You are about to drop the column `cores` on the `produtos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "cores",
ADD COLUMN     "cor" TEXT[];
