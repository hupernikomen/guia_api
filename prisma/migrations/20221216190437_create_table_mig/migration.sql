/*
  Warnings:

  - A unique constraint covering the columns `[regionID]` on the table `userLocale` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "userLocale_regionID_key" ON "userLocale"("regionID");
