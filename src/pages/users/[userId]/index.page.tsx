import { UserDetail } from '~/pages/users/[userId]/UserDetail'

const USER = {
  id: 1,
  name: 'user1'
}

export default function UserPage() {
  return <UserDetail user={USER} />
}
