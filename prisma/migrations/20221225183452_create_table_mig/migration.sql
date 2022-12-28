/*
  Warnings:

  - The `off` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `price` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "price",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
DROP COLUMN "off",
ADD COLUMN     "off" DOUBLE PRECISION NOT NULL DEFAULT 0;