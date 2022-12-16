/*
  Warnings:

  - You are about to drop the column `usuarioID` on the `config` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user]` on the table `config` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user` to the `config` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "config" DROP CONSTRAINT "config_usuarioID_fkey";

-- DropIndex
DROP INDEX "config_usuarioID_key";

-- AlterTable
ALTER TABLE "config" DROP COLUMN "usuarioID",
ADD COLUMN     "user" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "config_user_key" ON "config"("user");

-- AddForeignKey
ALTER TABLE "config" ADD CONSTRAINT "config_user_fkey" FOREIGN KEY ("user") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
