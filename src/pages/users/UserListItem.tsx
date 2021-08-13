import { User } from '~/pages/users/user'
import Link from 'next/link'

type Props = {
  user: User
}

export function UserListItem({ user }: Props) {
  return (
    <li>
      <Link href={`/users/${user.id}`}>
        <a>name: {user.name}</a>
      </Link>
    </li>
  )
}
