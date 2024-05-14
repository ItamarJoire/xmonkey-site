import { ReactNode } from "react"

interface GridContainerProps {
  children: ReactNode
}

export function GridContainer({children} : GridContainerProps){
  return(
    <div className="mx-4 md:mx-16 lg:mx-40 2xl:mx-[350px]">{children}</div>
  )
}