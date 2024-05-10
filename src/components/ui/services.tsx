import { Card } from "../card";
import { GridContainer } from "../gridContainer";

import ImgSocial from '/public/social.svg'
import ImgTraffic from '/public/traffic.svg'
import ImgDesign from '/public/design.svg'
import ImgSite from '/public/site.svg'
import { ButtonPrimary } from "../buttonPrimary";
import Link from "next/link";

export function Services(){
  return(
    <section className="py-4 md:py-24 bg-fund">
      <GridContainer>
        <div className="lg:flex lg:flex-col lg:items-center">
          <h1 className="title-section text-center ">Nossos <span className="text-orange-dark">serviços</span></h1>
          <p className="body-section text-center">Investir em serviços de marketing digital tornou-se uma necessidade para qualquer empresa que deseje <span className="text-title">permanecer relevante e competitiva</span> no mercado atual.</p>
        </div>
      </GridContainer>

      <div className="mx-4 md:mx-6 mt-16 grid gap-8 md:grid-cols-2 lg:mx-[276px] 2xl:mx-[396px]">
        <Card 
          image={ImgSocial} 
          title="Gerenciamento de redes sociais" 
          description="Planejamento, criação de artes, conteúdo estratégico, interação com seguidores, gestão e análise de métricas."
        />

        <Card 
          image={ImgTraffic} 
          title="Tráfego pago" 
          description="Criação de campanhas nas plataformas de anúncios, otimização e análise de resultados."
        />

        <Card 
          image={ImgDesign} 
          title="Design" 
          description="Desenvolvimento de identidade visual, criação de artes para as redes sociais e sites."
        />

        <Card 
          image={ImgSite} 
          title="Desenvolvimento de sites" 
          description="Criação de layout personalizado, design responsivo, integração com as redes sociais e com o WhatsApp."
        />
      </div>

      <div className="flex justify-center items-center">
        <ButtonPrimary name="Investir agora"/>
      </div>     
    </section>
  )
}