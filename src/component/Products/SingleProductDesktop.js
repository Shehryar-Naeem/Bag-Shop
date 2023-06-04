import { Stack } from "@mui/material"
import { ProductImage, Product, ProductActionsWrapper, ProductFavButton, ProductActionButton, ProductAddToCart } from "../../styles/Products"
import ProductMeta from "./ProductMeta"
import { Favorite, FitScreen, Share } from "@mui/icons-material"
import { useState } from "react"
import useDialogModel from "../../hooks/useDialogModel"
import ProducDetail from "../ProductDetail"
const SingleProductDesktop=({product,matches})=>{
    const [ProductDetailDialog,showProductDetailDialog]=useDialogModel(ProducDetail)
    

    const [showOptions,setShowOptions]= useState(false)
    const handleMouseEnter= ()=>{
        setShowOptions(true)
    }
    const handlemouseLeave=()=>{
        setShowOptions(false)
    }
    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handlemouseLeave}>
                <ProductImage src={product.image}/>
                <ProductFavButton>
                    <Favorite/>
                </ProductFavButton>
                {
                    showOptions&& (
            <ProductAddToCart show={showOptions} variant="contained">Add to Cart</ProductAddToCart>

                    )
                }
                <ProductActionsWrapper show={showOptions}>
                    <Stack direction="column">
                        
                        <ProductActionButton>
                            <Share color="primary"/>
                        </ProductActionButton>
                        <ProductActionButton onClick={()=>showProductDetailDialog()}>
                            <FitScreen color="primary"/>
                        </ProductActionButton>
                    </Stack>                    
                </ProductActionsWrapper>
            </Product>
            <ProductMeta product={product} matches={matches}/>
            <ProductDetailDialog product={product}/>

        </>
    )
}
export default SingleProductDesktop