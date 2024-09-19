/*
  Warnings:

  - Made the column `prescricao` on table `Paciente` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paciente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "prescricao" TEXT NOT NULL
);
INSERT INTO "new_Paciente" ("id", "nome", "prescricao") SELECT "id", "nome", "prescricao" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
