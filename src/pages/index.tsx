import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from "@/styles/pages/home";

import tshirt1 from '../assets/t-shirts/tshirt1.png'
import tshirt2 from '../assets/t-shirts/tshirt2.png'
import tshirt3 from '../assets/t-shirts/tshirt3.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className='keen-slider__slide'>
        <Image src={tshirt1} width={520} height={480} alt="" />
        <footer>
          <strong>T-shirt 1</strong>
          <span>$ 79,90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={tshirt2} width={520} height={480} alt="" />
        <footer>
          <strong>T-shirt 2</strong>
          <span>$ 79,90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={tshirt3} width={520} height={480} alt="" />
        <footer>
          <strong>T-shirt 3</strong>
          <span>$ 79,90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={tshirt1} width={520} height={480} alt="" />
        <footer>
          <strong>T-shirt 1</strong>
          <span>$ 179,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
