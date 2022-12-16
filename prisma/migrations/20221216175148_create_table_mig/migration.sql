/*
  Warnings:

  - You are about to drop the column `localeID` on the `regions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userID]` on the table `regions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userID` to the `regions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "regions" DROP CONSTRAINT "regions_localeID_fkey";

-- DropIndex
DROP INDEX "regions_localeID_key";

-- AlterTable
ALTER TABLE "regions" DROP COLUMN "localeID",
ADD COLUMN     "userID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "regions_userID_key" ON "regions"("userID");

-- AddForeignKey
ALTER TABLE "regions" ADD CONSTRAINT "regions_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
