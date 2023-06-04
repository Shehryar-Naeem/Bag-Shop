import { Typography } from "@mui/material"
import { ProductMetaWrapper } from "../../styles/Products"

const ProductMeta=({product,matches})=>{
    return (
        <>
            <ProductMetaWrapper>
                <Typography variant={matches? "h5":"h6"}>
                    {product.name}
                </Typography>
                <Typography variant={matches? "caption":"body1"}>
                    ${product.price}
                </Typography>
            </ProductMetaWrapper>
        </>
    )
}

export default ProductMeta;