import { renderHook } from '@testing-library/react-hooks'
import { rest } from 'msw'
import { describe, it } from 'vitest'

import { createQueryProviderWrapper, server } from '@/utils/tests'

import { useUsers } from './use-users'

describe('useUsers', () => {
  it('should return users successfully', async () => {
    const { result, waitFor } = renderHook(() => useUsers(), {
      wrapper: createQueryProviderWrapper(),
    })

    await waitFor(() => result.current.isSuccess)

    const user = result.current.data?.[0]

    expect(user?.login).toBe('user-login-1')
  })

  it('should return error when fetching users fails', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    const { result, waitFor } = renderHook(() => useUsers(), {
      wrapper: createQueryProviderWrapper(),
    })

    await waitFor(() => result.current.isError)

    expect(result.current.error).toBeDefined()
  })
})
