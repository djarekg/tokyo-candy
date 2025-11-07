import { withAccelerate } from '@prisma/extension-accelerate';
import { PrismaClient } from '../dist/generated';

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient().$extends(withAccelerate());

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export * from '../dist/generated';
export default prisma;
