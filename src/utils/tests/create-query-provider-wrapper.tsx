/* eslint-disable no-console */
import React from 'react'

import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from 'react-query'

type QueryProviderWrapperProps = {
  children: React.ReactNode
}

export const createQueryProviderWrapper = (config: QueryClientConfig = {}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => null,
    },
    ...config,
  })

  return ({ children }: QueryProviderWrapperProps) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
