/*
  Warnings:

  - A unique constraint covering the columns `[localeID]` on the table `regions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "regions_localeID_key" ON "regions"("localeID");
