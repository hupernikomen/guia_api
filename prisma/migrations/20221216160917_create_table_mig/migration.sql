-- CreateTable
CREATE TABLE "regions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "localeID" TEXT NOT NULL,

    CONSTRAINT "regions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "regions" ADD CONSTRAINT "regions_localeID_fkey" FOREIGN KEY ("localeID") REFERENCES "userLocale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
