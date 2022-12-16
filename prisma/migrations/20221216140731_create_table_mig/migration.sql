/*
  Warnings:

  - A unique constraint covering the columns `[userID]` on the table `userRegions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "userRegions_userID_key" ON "userRegions"("userID");
