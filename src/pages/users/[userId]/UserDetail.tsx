import { User } from '~/pages/users/user'
import { Title } from '~/ui-parts/typographies/Title'

type Props = {
  user: User
}

/**
 * @package
 */
export function UserDetail(user: Props): JSX.Element {
  return <Title>ユーザー詳細</Title>
}
