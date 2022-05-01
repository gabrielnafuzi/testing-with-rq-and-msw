import { useUsers } from '@/services/hooks/use-users'

import { UserCard } from './components/user-card'

export const Home = () => {
  const { data, isLoading } = useUsers()

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <h1>Home</h1>

      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          padding: '1rem',
        }}
      >
        {data?.map((user) => (
          <UserCard key={user.id} {...{ user }} />
        ))}
      </ul>
    </div>
  )
}
