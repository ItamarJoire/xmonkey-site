import { ReactNode } from "react"

interface GridContainerProps {
  children: ReactNode
}

export function GridContainter({children} : GridContainerProps){
  return(
    <div className="mx-4 md:mx-24 lg:mx-[480px]">{children}</div>
  )
}