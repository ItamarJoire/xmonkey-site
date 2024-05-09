import Link from "next/link";
import Image from "next/image";

import { GridContainer } from "../gridContainer";

import IconInsta from '/public/insta.svg'
import IconFace from '/public/face.svg'

export function Footer(){
  return(
    <footer className="py-10 bg-fund">
      <div>
        <GridContainer>
          <div className="text-white ring-1 ring-[#424344]/50"></div>

          <div className="flex justify-center flex-col text-center pt-8">
            <p className="text-body text-opacity-60">© 2024 Xmonkey.</p>
            <p className="text-body text-opacity-60">Todos os direitos reservados.</p>
          </div>

          <div className="flex justify-center gap-3 mt-3">
            <Link href='https://www.instagram.com/x.monkeybrasil/' target="_blank"><Image src={IconInsta} alt="" width={24} height={24} className="opacity-60"/></Link>
            {/* <Link href=''><Image src={IconFace} alt="" width={24} height={24} className="opacity-60"/></Link> */}
          </div>
        </GridContainer>
      </div>

    </footer>
  )
}