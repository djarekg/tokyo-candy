import * as auth from '#app/auth/auth.ts';
import { prisma } from '#app/client/index.ts';
import { TOKEN_SECRET } from '#app/config.ts';
import { Role } from '#app/generated/prisma/enums.ts';
import type { AuiContext } from '#app/types/index.ts';
import jwt from 'jsonwebtoken';
import type { Context } from 'koa';

export const getUser = async (ctx: AuiContext<{ username: string }>) => {
  const {
    params: { username },
  } = ctx;

  const user = await prisma.user.findFirst({
    where: {
      email: username,
    },
  });

  ctx.body = user;
};

export const signin = async (ctx: AuiContext<{ username: string; password: string }>) => {
  const { username, password } = ctx.request.body;

  const { statusCode, userId, role } = await auth.signin({ username, password });

  if (statusCode !== 200 || !userId) {
    ctx.status = statusCode;
    return;
  }

  if (statusCode === 200) {
    // Credentials are valid, so return a JWT
    jwt.sign({ username }, TOKEN_SECRET!, {
      expiresIn: '1h',
    });

    ctx.body = { userId, role: role ?? Role.USER };
    return;
  }

  ctx.status = 401; // UNAUTHORIZED
};

export const signout = (ctx: Context) => {
  jwt.sign({}, TOKEN_SECRET!, {
    expiresIn: '1s', // Expire the token immediately
  });

  ctx.body = { success: true };
};
