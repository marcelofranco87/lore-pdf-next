/*
  Warnings:

  - You are about to drop the column `cpf` on the `Paciente` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paciente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Paciente" ("id", "nome") SELECT "id", "nome" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
