// Example: Direct TCP + adapter (v7)
import { PrismaClient } from '#app/generated/prisma/client';
import { PrismaPostgresAdapter } from '@prisma/adapter-ppg';

const adapter = new PrismaPostgresAdapter({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

export default prisma;
