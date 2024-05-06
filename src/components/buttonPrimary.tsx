import Link from "next/link"

interface ButtonProps{
  name: string
}

export function ButtonPrimary({name}: ButtonProps){
  return(
    <Link href="/" target="_blank">
      <button className="mt-16  text-white font-bold tracking-wide font-['lufga'] uppercase bg-gradient-to-r from-orange-dark to-orange-semi-light py-3 px-14 rounded-3xl transition-opacity duration-250 hover:opacity-70">
        {name}
      </button>
    </Link>
   
  )
}