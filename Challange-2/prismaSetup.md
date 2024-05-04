# prisma
install prisma and PrismaClient

create a file called prismaDB in the lib folder 
and create a prisma environment like bellow.

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production")
  globalThis.prisma = prismadb;
export default prismadb;

================================================================
creating models
================================================================
in schema.prisma file 
we need to create our models

// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

//first we need to setup and connect the DB
datasource db {
  provider     = "mysql"
  url          = env("DATABASE_URL")
  relationMode = "prisma"
}

// a demo model 
model Store {
  id       String   @id @default(uuid())
  name     String
  userId   String
  createAt DateTime @default(now())
  updateAt DateTime @updatedAt
}

