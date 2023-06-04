import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, createTheme, styled, useMediaQuery } from '@mui/material'
import React from 'react'
import { Colors } from '../../styles/theme'
import { Close, Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Product, ProductImage } from '../../styles/Products'


const slideTransition=(prop)=>{
    return <Slide direction='down' {...prop}/>
}
const ProductDetailWrapper=styled(Box)(({theme})=>({
    display:'flex',
    padding:theme.spacing(4)
}))
const ProductDetailInfoWrapper=styled(Box)(()=>({
    display:'flex',
    flexDirection:'column',
    maxWidth:500,
    lineHeight:1.5
}))
export default function ProducDetail({open,onClose,product}) {
    const theme=createTheme()
    const matches=useMediaQuery( theme.breakpoints.down("md"))
   
  return (
    <>
        <Dialog
            TransitionComponent={slideTransition}
            variant="permanant"
            fullScreen
            open={open}
        >
            <DialogTitle sx={{
                background:Colors.secondary
            }}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    Product Title
                    <IconButton onClick={onClose}>
                        <Close/>
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper display={'flex'} flexDirection={matches? 'column':'row'}>
                <Product sx={{ mr: 4 }}>
            <ProductImage src={product.image} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant="subtitle">SKU: 123</Typography>
            <Typography variant="subtitle">Availability: 5 in stock</Typography>
            <Typography sx={{ lineHeight: 2 }} variant="h4">
              {product.name}
            </Typography>
            <Typography variant="body">
              {product.description}
              {product.description}
              {product.description}
            </Typography>
            <Box
              sx={{ mt: 4 }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {/* <IncDec /> */}
              <Button variant="contained">Add to Cart</Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{ mt: 4, color: Colors.light }}
            >
              <Facebook sx={{ mr: 2 }} />
              Add to wishlist
            </Box>
            <Box
              sx={{
                mt: 4,
                color: Colors.dove_gray,
              }}
            >
              <Facebook />
              <Twitter sx={{ pl: 2 }} />
              <Instagram sx={{ pl: 2 }} />
            </Box>
          </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    </>
  )
}
