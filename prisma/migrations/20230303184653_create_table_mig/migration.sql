-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT false,
    "nome" TEXT,
    "telefone" TEXT,
    "bio" TEXT,
    "endereco" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "latlng" TEXT,
    "entrega" BOOLEAN NOT NULL DEFAULT false,
    "regiaoID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "oferta" TEXT NOT NULL DEFAULT '',
    "tamanho" TEXT[],
    "cor" TEXT[],
    "imagens" JSONB[],
    "usuarioID" TEXT NOT NULL,
    "categoriaID" TEXT NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regioes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "regioes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "produtos_categoriaID_key" ON "produtos"("categoriaID");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_regiaoID_fkey" FOREIGN KEY ("regiaoID") REFERENCES "regioes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_categoriaID_fkey" FOREIGN KEY ("categoriaID") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
