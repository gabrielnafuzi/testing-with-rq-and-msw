import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Home } from '@/pages'
import { queryClient } from '@/services'

const IS_DEV = import.meta.env.DEV

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />

      {IS_DEV && <ReactQueryDevtools />}
    </QueryClientProvider>
  )
}
