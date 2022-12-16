/*
  Warnings:

  - Made the column `parcelas` on table `config` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "config" ALTER COLUMN "parcelas" SET NOT NULL,
ALTER COLUMN "parcelas" SET DATA TYPE TEXT;
