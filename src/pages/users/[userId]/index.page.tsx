import { UserDetail } from '~/pages/users/[userId]/UserDetail'
import { User } from '~/pages/users/user'

const USER: User = {
  id: 1,
  name: 'user1'
}

export default function UserPage(): JSX.Element {
  return <UserDetail user={USER} />
}
