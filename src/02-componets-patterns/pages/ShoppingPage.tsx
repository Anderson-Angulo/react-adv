import {ProductCard} from "../components/"

export const ShoppingPage = () => {

  const product={
    id:1,
    title:`Coffee Mug - Product`,
    img:"./coffee-mug.png"
  }
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{
        display: "flex",
        flexWrap:"wrap"
      }}>
        <ProductCard product={product} >
          <ProductCard.Image  />
          <ProductCard.Title  />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product} >
          <ProductCard.Image  />
          <ProductCard.Title  />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
      
    </div>
  )
}
