/*
  Warnings:

  - You are about to drop the column `createdAt` on the `migrations` table. All the data in the column will be lost.
  - You are about to drop the column `readAt` on the `migrations` table. All the data in the column will be lost.
  - You are about to drop the column `recipientId` on the `migrations` table. All the data in the column will be lost.
  - Added the required column `recipient_id` to the `migrations` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_migrations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipient_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "read_at" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_migrations" ("category", "content", "id") SELECT "category", "content", "id" FROM "migrations";
DROP TABLE "migrations";
ALTER TABLE "new_migrations" RENAME TO "migrations";
CREATE INDEX "migrations_recipient_id_idx" ON "migrations"("recipient_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
