import { ReactNode } from "react"

interface GridContainerProps {
  children: ReactNode
}

export function GridContainer({children} : GridContainerProps){
  return(
    <div className="mx-4 md:mx-16 lg:mx-[480px]">{children}</div>
  )
}