/*
  Warnings:

  - A unique constraint covering the columns `[userID]` on the table `userLocale` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "userLocale_userID_key" ON "userLocale"("userID");
