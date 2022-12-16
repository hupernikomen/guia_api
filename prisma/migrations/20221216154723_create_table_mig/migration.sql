/*
  Warnings:

  - You are about to drop the `userRegions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "userRegions" DROP CONSTRAINT "userRegions_userID_fkey";

-- DropTable
DROP TABLE "userRegions";

-- CreateTable
CREATE TABLE "userLocale" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL DEFAULT '',
    "district" TEXT NOT NULL DEFAULT '',
    "city" TEXT NOT NULL DEFAULT 'Teresina',
    "state" TEXT NOT NULL DEFAULT 'Piaui',
    "latlng" TEXT NOT NULL DEFAULT '0,0',
    "userID" TEXT NOT NULL,

    CONSTRAINT "userLocale_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userLocale_userID_key" ON "userLocale"("userID");

-- AddForeignKey
ALTER TABLE "userLocale" ADD CONSTRAINT "userLocale_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
