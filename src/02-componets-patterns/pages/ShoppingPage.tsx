import { ProductCard} from "../components/"
import {products} from '../data/products'
import { useShoppingCart } from "../hooks/useShoppingCart"

import "../styles/custom-styles.css"


export const ShoppingPage = () => {

  const {shoppingCart,onProductCountChange}=useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: "flex",
        flexWrap:"wrap"
      }}>
        {
          
          products.map(product=>(
            <ProductCard 
              key={product.id} 
              className="bg-dark" 
              product={product} 
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
              >
              <ProductCard.Image className="custom-image"  />
              <ProductCard.Title className="text-white" />
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>
          ))
         
        }
      </div>
      
      <div className="shopping-cart">
        {
           Object.values(shoppingCart).map(product=>(
              <ProductCard 
                key={product.id}
                style={{width:"100px"}} 
                className="bg-dark" 
                product={product}
                value={product.count}
                onChange={onProductCountChange}
                >
              <ProductCard.Image className="custom-image"  />
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>
           ))
        }

            

      </div>
      <pre>
        {
          JSON.stringify(shoppingCart,null,5)
        }
      </pre>
      
    </div>
  )
}
