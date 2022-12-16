/*
  Warnings:

  - You are about to drop the `userDatas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "userDatas" DROP CONSTRAINT "userDatas_userID_fkey";

-- DropTable
DROP TABLE "userDatas";

-- CreateTable
CREATE TABLE "userData" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "bio" TEXT NOT NULL DEFAULT '',
    "userID" TEXT NOT NULL,

    CONSTRAINT "userData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userData_userID_key" ON "userData"("userID");

-- AddForeignKey
ALTER TABLE "userData" ADD CONSTRAINT "userData_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
