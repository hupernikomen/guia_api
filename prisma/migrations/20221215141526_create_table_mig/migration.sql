/*
  Warnings:

  - A unique constraint covering the columns `[categoriaID]` on the table `produtos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoriaID` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "categoriaID" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "categoria" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "produtos_categoriaID_key" ON "produtos"("categoriaID");

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_categoriaID_fkey" FOREIGN KEY ("categoriaID") REFERENCES "categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
