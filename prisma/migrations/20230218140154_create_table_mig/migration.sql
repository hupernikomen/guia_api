-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "regionID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userFormats" (
    "id" TEXT NOT NULL,
    "delivery" BOOLEAN NOT NULL DEFAULT false,
    "portion" TEXT NOT NULL DEFAULT '0',
    "userID" TEXT NOT NULL,

    CONSTRAINT "userFormats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userData" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "bio" TEXT NOT NULL DEFAULT '',
    "userID" TEXT NOT NULL,

    CONSTRAINT "userData_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "off" TEXT NOT NULL DEFAULT '',
    "size" TEXT[],
    "color" TEXT[],
    "files" JSONB[],
    "userID" TEXT NOT NULL,
    "categoryID" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "regions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userFormats_userID_key" ON "userFormats"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "userData_userID_key" ON "userData"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "userLocale_userID_key" ON "userLocale"("userID");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_regionID_fkey" FOREIGN KEY ("regionID") REFERENCES "regions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userFormats" ADD CONSTRAINT "userFormats_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userData" ADD CONSTRAINT "userData_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userLocale" ADD CONSTRAINT "userLocale_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
