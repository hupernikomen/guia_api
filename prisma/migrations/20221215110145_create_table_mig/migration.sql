-- CreateTable
CREATE TABLE "config" (
    "id" TEXT NOT NULL,
    "delivery" BOOLEAN NOT NULL,
    "parcelas" INTEGER,
    "usuarioID" TEXT NOT NULL,

    CONSTRAINT "config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "config_usuarioID_key" ON "config"("usuarioID");

-- AddForeignKey
ALTER TABLE "config" ADD CONSTRAINT "config_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
