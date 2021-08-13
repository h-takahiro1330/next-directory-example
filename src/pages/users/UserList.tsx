import { User } from '~/pages/users/user'
import { UserListItem } from '~/pages/users/UserListItem'
import { Title } from '~/ui-parts/typographies/Title'

type Props = {
  users: User[]
}

/**
 * @package
 */
export function UserList({ users }: Props): JSX.Element {
  return (
    <>
      <Title>ユーザー一覧</Title>
      <ul>
        {users.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </ul>
    </>
  )
}
