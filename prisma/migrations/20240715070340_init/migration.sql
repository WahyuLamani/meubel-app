/*
  Warnings:

  - Added the required column `fullname` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "fullname" VARCHAR(255) NOT NULL;
