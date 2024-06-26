import Image from "next/image";

import { GridContainer } from "../gridContainer";

import ImgAbout from '/public/about.svg'
import { ButtonPrimary } from "../buttonPrimary";

export function About(){
  return(
    <section className="py-10 bg-fund">
      <GridContainer>
      <div className="flex justify-center ">
        <div className="lg:flex">
          <div>
            <div className="">
              <h2 className="title-section">Quem <span className="text-orange-dark">somos</span></h2>
              <p className="body-section">A Xmonkey nasceu da necessidade de empresas se adaptarem a era digital. Viemos como resultado de uma longa jornada de sucesso, mais de 10 anos de experiência em redes sociais, atendimento ao consumidor e vendas.</p>
            </div>

            <div className="flex justify-center items-center lg:block">
              <ButtonPrimary name="Quero embarcar nessa"/>
            </div>
          </div>

          <div className="mt-12 lg:ml-16 md:flex md:justify-center md:items-center mx-auto">
            <Image src={ImgAbout} alt=""/>
          </div>

         
        </div>
      </div>
      </GridContainer>
    </section>
  )
}