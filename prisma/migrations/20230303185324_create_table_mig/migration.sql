-- DropForeignKey
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_regiaoID_fkey";

-- AlterTable
ALTER TABLE "usuarios" ALTER COLUMN "regiaoID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_regiaoID_fkey" FOREIGN KEY ("regiaoID") REFERENCES "regioes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
