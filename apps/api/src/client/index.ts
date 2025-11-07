import type { SigninArgs } from '#app/auth/auth.ts';
import * as auth from '#app/auth/auth.ts';
import { PrismaClient } from '#app/generated/prisma/client.ts';
import type { AuthStatus } from '#app/types/auth-status';
import { PrismaPg } from '@prisma/adapter-pg';

/**
 * This is a HMR workaround since the module
 * responsible for exporting PrismaClient gets refreshed, which can result
 * in new instances of PrismaClient being created.
 *
 * @see {@link https://www.prisma.io/docs/guides/performance-and-optimization/connection-management#prevent-hot-reloading-from-creating-new-instances-of-prismaclient | PrismaClient in long-running applications}
 */
const globalForPrisma = global as unknown as { prisma: PrismaClient };

type getPrismaProps = {
  connectionString: string;
};

const getPrisma = ({ connectionString }: getPrismaProps): PrismaClient => {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma;
  }

  const adapter = new PrismaPg({ connectionString });
  const prisma = new PrismaClient({ adapter });
  return prisma;
};

console.log('db connection;');
console.log(process.env.DATABASE_URL);

const prisma = getPrisma({ connectionString: `${process.env.DATABASE_URL}` });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export type db = typeof prisma & {
  auth: {
    signin: (args: SigninArgs) => Promise<AuthStatus>;
  };
};

const db: db = {
  ...prisma,
  auth,
} as const;

export { db, prisma };
