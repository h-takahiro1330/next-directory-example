import { User } from '~/pages/users/user'
import { Title } from '~/ui-parts/typographies/Title'

type Props = {
  user: User
}

export function UserDetail(user: Props) {
  return <Title>ユーザー詳細</Title>
}
