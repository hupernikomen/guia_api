/*
  Warnings:

  - You are about to drop the column `regionID` on the `userLocale` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "userLocale" DROP CONSTRAINT "userLocale_regionID_fkey";

-- AlterTable
ALTER TABLE "userLocale" DROP COLUMN "regionID";
