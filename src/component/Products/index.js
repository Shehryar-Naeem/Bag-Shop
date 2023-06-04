import { Container, Grid, useMediaQuery, useTheme } from "@mui/material"
import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";

const Products = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const renderProducts = products.map((product) => (
        <Grid item xs={2} md={4} sm={4} key={product.id} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            {matches?(<SingleProduct product={product} matches={matches} />):(<SingleProductDesktop product={product} matches={matches} />)}
        </Grid>
    ))
    return (
        <>
            <Container>
                <Grid
                    container
                    spacing={{xs:2,md:3}}
                    justifyContent={"center"}
                    sx={{ margin: "20px 4px 10px 4px" }}
                    columns={{xs:4,sm:8, md:12}}
                >
                    {renderProducts}
                </Grid>
            </Container>
        </>
    )
}

export default Products