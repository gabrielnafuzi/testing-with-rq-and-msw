import { useQuery, UseQueryOptions } from 'react-query'

import { api } from '@/services/api'

import { User } from './use-users.types'

export const getUsers = async () => {
  const { data: users } = await api.get<User[]>('/users')

  return users
}

export const useUsers = (
  options?: UseQueryOptions<User[], unknown, User[], 'users'>
) => {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 60 * 60, // 1 hour
    ...(options ?? {}),
  })
}
