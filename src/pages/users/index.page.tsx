import { UserList } from '~/pages/users/UserList'
import { User } from '~/pages/users/user'

const USERS: User[] = [
  { id: 1, name: 'user1' },
  { id: 2, name: 'user2' },
  { id: 3, name: 'user3' },
  { id: 4, name: 'user4' },
  { id: 5, name: 'user5' }
]

export default function UsersPage(): JSX.Element {
  return <UserList users={USERS} />
}
