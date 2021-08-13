import { ReactNode } from 'react'

type Props = {
  onClick: () => void
  children: ReactNode
}

export function Button({ onClick, children }: Props): JSX.Element {
  return <button onClick={onClick}>{children}</button>
}
