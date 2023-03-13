/*
  Warnings:

  - The `latlng` column on the `usuarios` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "latlng",
ADD COLUMN     "latlng" JSONB;
