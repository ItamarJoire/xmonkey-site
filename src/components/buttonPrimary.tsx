import Link from "next/link"

interface ButtonProps{
  name: string
}

export function ButtonPrimary({name}: ButtonProps){
  return(
    <Link href="https://api.whatsapp.com/send?l=pt&phone=557192849259&text=Olá! Tudo bem? Gostaria de impulsionar minhas vendas." target="_blank">
      <button className="mt-12  text-white md:text-xl font-bold tracking-wide font-['lufga'] uppercase bg-gradient-to-r from-orange-dark to-orange-semi-light py-3 px-14 rounded-3xl transition-opacity duration-250 hover:opacity-70">
        {name}
      </button>
    </Link>
   
  )
}