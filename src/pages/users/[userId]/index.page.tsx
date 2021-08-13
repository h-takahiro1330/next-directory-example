import { UserDetail } from '~/pages/users/[userId]/UserDetail'

const USER = {
  id: 1,
  name: 'user1'
}

export default function UserPage(): JSX.Element {
  return <UserDetail user={USER} />
}
