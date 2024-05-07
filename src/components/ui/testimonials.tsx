'use client'

import { CarouselTestimonials } from "../carouselTestimonials";

export function Testimonials(){
  return(
    <section className="py-16 bg-fund">
      <div className="mx-4 md:mx-24  lg:grid lg:grid-cols-2 lg:mx-[460px]">
        <div>
          <h1 className="title-section">Relatos de quem já <br />contratou a <span className="text-orange-dark">Xmonkey</span></h1>
          <p className="body-section">Ter o reconhecimento de nossos clientes é extremamente satisfatório, e esse é o <span className="text-title">nosso maior objetivo</span>. Trabalhamos, estudamos, pensando e estruturamos diariamente para trazer resultados consideráveis para cada empresa que deposita confiança na Xmonkey.</p>
          <p className="body-section">A nossa missão é cumprida quando recebemos depoimentos emocionantes de nossos clientes. Somos muito gratos por toda parceria e por confiarem em nosso trabalho.</p>
        </div>

        <div>
          <div className="mt-10">
            <CarouselTestimonials />
          </div>
        </div>
      </div>
    </section>
  )
}