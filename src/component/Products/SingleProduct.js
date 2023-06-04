import { Stack } from "@mui/material"
import { ProductImage, Product, ProductActionsWrapper, ProductFavButton, ProductActionButton, ProductAddToCart } from "../../styles/Products"
import ProductMeta from "./ProductMeta"
import { Favorite, FitScreen, Share } from "@mui/icons-material"
import useDialogModel from "../../hooks/useDialogModel"
import ProducDetail from "../ProductDetail"

const SingleProduct=({product,matches})=>{
    const [ProductDetailDialog,showProductDetailDialog]=useDialogModel(ProducDetail)
    return (
        <>
            <Product>
                <ProductImage src={product.image}/>
                <ProductMeta product={product} matches={matches}/>
                <ProductActionsWrapper>
                    <Stack direction="row">
                        <ProductFavButton isFav={0}>
                            <Favorite/>
                        </ProductFavButton>
                        <ProductActionButton>
                            <Share color="primary"/>
                        </ProductActionButton>
                        <ProductActionButton onClick={()=>showProductDetailDialog()}>
                            <FitScreen color="primary"/>
                        </ProductActionButton>
                    </Stack>                    
                </ProductActionsWrapper>
            </Product>
            <ProductAddToCart variant="contained">Add to Cart</ProductAddToCart>
            <ProductDetailDialog product={product}/>
        </>
    )
}
export default SingleProduct