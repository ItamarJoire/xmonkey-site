'use client'

import Image from 'next/image'

import { CarouselComments } from '../carouselComments'
import { GridContainer } from '../gridContainer'

import { Brands } from '@/lib'
import { ButtonPrimary } from '../buttonPrimary'

export function Assessments(){
  return(
    <section className='py-16 bg-fund bg-[url("/logo-bg.png")] bg-cover'>
     <GridContainer>
      <div>
        <h2 className='title-section text-3xl text-center'>Não somos nós que estamos dizendo.<br /> Dá uma conferida nas nossas avaliações:
        </h2>
      </div>
     </GridContainer>

     <div className='mx-4 md:mx-24 lg:mx-[440px]'>
      <CarouselComments />
     </div>

    <div className='py-16'>
      <GridContainer>
        <div>
          <h2 className='title-section text-3xl text-center'>E aqui está mais alguns clientes que <br /><span className='text-orange-dark'>fazem parte do nosso time</span></h2>
        </div>

        <div className='mt-7 grid grid-cols-2 mx-auto md:grid-cols-3 lg:grid-cols-5'>
          {
            Brands.map((brand, index) => (
              <Image src={brand.src} alt={brand.alt} width={112} height={112}/>
            ))
          }
        </div>
      </GridContainer>
     </div>

     <div className="flex justify-center items-center">
        <ButtonPrimary name="Quero vender mais"/>
      </div>
    </section>
  )
}