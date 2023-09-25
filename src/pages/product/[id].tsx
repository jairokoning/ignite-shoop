import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer />

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>$ 79.90</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, tempore a! Libero et doloribus debitis adipisci necessitatibus saepe repellat explicabo labore! Vel doloribus excepturi maxime hic, culpa pariatur reprehenderit! Itaque!</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}