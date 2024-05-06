import { ReactNode } from "react"

interface GridContainerProps {
  children: ReactNode
}

export function GridContainter({children} : GridContainerProps){
  return(
    <div className="mx-4 md:mx-12 lg:mx-80">{children}</div>
  )
}