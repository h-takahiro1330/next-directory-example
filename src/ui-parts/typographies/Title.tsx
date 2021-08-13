import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Title({ children }: Props): JSX.Element {
  return <h1>{children}</h1>
}
