import { rest } from 'msw'

import type { User } from '@/services/hooks/use-users'

import { usersMock } from '../data'

export const handlers = [
  rest.get('*/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json<User[]>(usersMock))
  }),
]
