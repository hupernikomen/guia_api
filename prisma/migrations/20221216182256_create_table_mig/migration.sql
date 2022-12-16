/*
  Warnings:

  - You are about to drop the column `userID` on the `regions` table. All the data in the column will be lost.
  - Added the required column `regionID` to the `userLocale` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "regions" DROP CONSTRAINT "regions_userID_fkey";

-- DropIndex
DROP INDEX "regions_userID_key";

-- AlterTable
ALTER TABLE "regions" DROP COLUMN "userID";

-- AlterTable
ALTER TABLE "userLocale" ADD COLUMN     "regionID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "regionId" TEXT;

-- AddForeignKey
ALTER TABLE "userLocale" ADD CONSTRAINT "userLocale_regionID_fkey" FOREIGN KEY ("regionID") REFERENCES "regions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
