import React, { useContext } from "react"
import NoImage from '../assets/no-image.jpg'
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'


export interface Props{
  img?:string,
  className?:string,
  style?:React.CSSProperties
}
export const ProductImage=({img,className,style}:Props)=>{
  const {product}=useContext(ProductContext)
  let imgShow:string
  if(img){
    imgShow=img
  }else if(product.img){
    imgShow=product.img
  }else{
    imgShow=NoImage
  }
  return (
  <img
    style={style}
    className={`${styles.productImg} ${className}`} src={imgShow} alt="Product" />
  )
}
