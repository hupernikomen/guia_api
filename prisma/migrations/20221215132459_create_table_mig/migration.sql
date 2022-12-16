/*
  Warnings:

  - You are about to drop the column `user` on the `config` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[usuarioID]` on the table `config` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usuarioID` to the `config` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "config" DROP CONSTRAINT "config_user_fkey";

-- DropIndex
DROP INDEX "config_user_key";

-- AlterTable
ALTER TABLE "config" DROP COLUMN "user",
ADD COLUMN     "usuarioID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "config_usuarioID_key" ON "config"("usuarioID");

-- AddForeignKey
ALTER TABLE "config" ADD CONSTRAINT "config_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
