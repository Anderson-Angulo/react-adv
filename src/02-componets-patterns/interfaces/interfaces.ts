import {Props as ProductCardProps} from "../components/ProductCard"
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductButtonsProps } from "../components/ProductButtons";


export interface Product{
  id:number
  title:string
  img?:string
}

export interface ProductContextProps{
  counter:number
  increaseBy:(value:number)=>void
  product:Product
}

export interface ProductCardHOCProps{
  Image:(props:ProductImageProps)=>JSX.Element
  Title:(props:ProductTitleProps)=>JSX.Element
  Buttons:(props:ProductButtonsProps)=>JSX.Element
  ({ product, children }: ProductCardProps):JSX.Element
}

export interface OnChangeArgs{
  product:Product,
  count:number
}

export interface ProductInCart extends Product{
  count:number
}
