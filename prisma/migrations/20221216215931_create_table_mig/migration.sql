/*
  Warnings:

  - A unique constraint covering the columns `[regionID]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `regionID` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "regionID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_regionID_key" ON "users"("regionID");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_regionID_fkey" FOREIGN KEY ("regionID") REFERENCES "regions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
