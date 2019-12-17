// final stateless component
import React, { MouseEvent, ReactNode, SFC } from 'react'
type Props = {
 onClick(e: MouseEvent<HTMLElement>): void
 children?: ReactNode
}
export const Button: SFC<Props> = ({ onClick: handleClick, children }) => (
  <button onClick={handleClick}>{children}</button>
)
