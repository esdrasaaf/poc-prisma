/*
  Warnings:

  - You are about to drop the column `genre` on the `movies` table. All the data in the column will be lost.
  - You are about to drop the column `platform` on the `movies` table. All the data in the column will be lost.
  - Added the required column `genreId` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platformId` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "genre",
DROP COLUMN "platform",
ADD COLUMN     "genreId" INTEGER NOT NULL,
ADD COLUMN     "platformId" INTEGER NOT NULL,
ALTER COLUMN "summary" SET DEFAULT '" "';

-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platforms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "platforms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genres_name_key" ON "genres"("name");

-- CreateIndex
CREATE UNIQUE INDEX "platforms_name_key" ON "platforms"("name");

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "platforms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
