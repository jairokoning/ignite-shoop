import Image from 'next/image'
import { HomeContainer, Product } from "@/styles/pages/home";

import tshirt1 from '../assets/t-shirts/tshirt1.png'
import tshirt2 from '../assets/t-shirts/tshirt2.png'
import tshirt3 from '../assets/t-shirts/tshirt3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tshirt1} width={520} height={480} alt="" />
        <footer>
          <strong>T-shirt 1</strong>
          <span>$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={tshirt2} width={520} height={480} alt="" />
        <footer>
          <strong>T-shirt 2</strong>
          <span>$ 79,90</span>
        </footer>
      </Product>
      {/* <Product>
        <Image src={tshirt3} width={520} height={480} alt="" />
        <footer>
          <strong>T-shirt 3</strong>
          <span>$ 79,90</span>
        </footer>
      </Product> */}
    </HomeContainer>
  )
}
