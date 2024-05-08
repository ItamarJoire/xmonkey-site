import Image from "next/image";

interface CardProps{
  image: string,
  title: string;
  description: string;
}

export function Card({ image, title, description}: CardProps ){
  return(
    <div className="mx-auto ring-1 ring-[#E4E4E7]/10 rounded-2xl w-[344px] p-6 flex flex-col justify-center items-center">
        <Image src={image} alt="" className="w-[272px]"/>
        <div className="mt-10">
          <h2 className="font-bold text-title text-lg md:text-xl">{title}</h2>
          <p className="body-section">{description}</p>
        </div>
    </div>
  )
}