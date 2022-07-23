import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components/"
import "../styles/custom-styles.css"
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
        <ProductCard className="bg-dark" product={product} >
          <ProductCard.Image style={
            {boxShadow:"0px 2px 5px rgba(0,0,0,0.16),0px 2px 10px rgba(0,0,0,0.12)"}
          } className="custom-image"  />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>


        <ProductCard className="bg-dark" product={product} >
          <ProductImage style={
            {boxShadow:"0px 2px 5px rgba(0,0,0,0.16),0px 2px 10px rgba(0,0,0,0.12)"}
          } className="custom-image"  />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>


        <ProductCard 
           style={{"background":"yellow"}}
           product={product} >
          <ProductImage style={{padding:"10px",borderRadius:"40px",boxShadow:"0px 2px 5px rgba(0,0,0,0.16),0px 2px 10px rgba(0,0,0,0.12)"}} />
          <ProductTitle style={{"fontWeight":"bold","display":"block","textAlign":"center"}}  />
          <ProductButtons style={
            {
              display: "flex",
              justifyContent:"center",
              
            }
          } />
        </ProductCard>
      </div>
      
    </div>
  )
}
