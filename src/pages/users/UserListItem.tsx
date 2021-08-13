import { User } from '~/pages/users/user'
import Link from 'next/link'

type Props = {
  user: User
}

/**
 * @package
 */
export function UserListItem({ user }: Props): JSX.Element {
  return (
    <li>
      <Link href={`/users/${user.id}`}>
        <a>name: {user.name}</a>
      </Link>
    </li>
  )
}
