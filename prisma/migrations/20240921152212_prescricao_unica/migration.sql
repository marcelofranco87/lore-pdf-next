/*
  Warnings:

  - You are about to drop the `Prescricao` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN "prescricao" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Prescricao";
PRAGMA foreign_keys=on;
