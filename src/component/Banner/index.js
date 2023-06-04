import { Typography, useMediaQuery, useTheme } from "@mui/material"
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/Banner"
import bagimg from "../../images/bags.png"
const Banner=()=>{
    const theme = useTheme()
    const matches= useMediaQuery(theme.breakpoints.down("md"))
    return (
        <>
        <BannerContainer>
        <BannerImage src={bagimg}/>
        <BannerContent>
            <Typography variant="h6">Huge Collection</Typography>
            <BannerTitle variant="h2">
                New Bags
            </BannerTitle>
            <BannerDescription variant="subtitle">
                Amazing bags with new variety and with different colors and different styles, and different carrying styles.
            </BannerDescription>
            <BannerShopButton color="primary">Shop Now</BannerShopButton>
        </BannerContent>
        </BannerContainer>
        </>
    )
}
export default Banner