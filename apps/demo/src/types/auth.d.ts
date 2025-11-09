import type { Role } from '@tc/auth';
import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: Role;
    } & DefaultSession['user'];
  }

  interface User {
    roleId?: number; // Make it optional for OAuth users
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    role?: Role;
  }
}
