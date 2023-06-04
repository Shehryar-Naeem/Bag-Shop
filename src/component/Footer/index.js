import { Box, Button, Grid, List, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { Colors } from '../../styles/theme'
import { FooterTitle, SubscrbeTextField } from '../../styles/footer'
import { Facebook, Instagram, Send, Twitter } from '@mui/icons-material'

export default function Footer() {
    return (
        <>
            <Box sx={{
                background: Colors.shaft,
                color: Colors.white,
                p: { xs: 4, md: 10 },
                // pt:12,
                // pb:12,
                fontSize: { xs: '12px', md: '14px' }

            }}>
                <Grid container spacing={2} justifyContent={'center'}>
                    <Grid item lg={4} md={6}>
                        <FooterTitle variant='body1'>
                            About us
                        </FooterTitle>
                        <Typography variant='caption2'>
                            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
                            incididunt ut labor et dzolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud.
                        </Typography>
                        <Box sx={{
                            color: Colors.dove_gray,
                            mt: 4
                        }}>
                            <Facebook sx={{ mr: 1 }} />
                            <Twitter sx={{ mr: 1 }} />
                            <Instagram />
                        </Box>
                    </Grid>
                    <Grid item md={6} lg={2}>
                        <FooterTitle variant='body1'>
                            Information
                        </FooterTitle>
                        <List>
                            <ListItemText >
                                <Typography lineHeight={2} variant='caption2'>
                                    About us
                                </Typography>
                            </ListItemText>
                            <ListItemText >
                                <Typography lineHeight={2} variant='caption2'>
                                    order tracking
                                </Typography>
                            </ListItemText>
                            <ListItemText >
                                <Typography lineHeight={2} variant='caption2'>
                                    privacy &amp; policy
                                </Typography>
                            </ListItemText>
                            <ListItemText >
                                <Typography lineHeight={2} variant='caption2'>
                                    term &amp; condition
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>
                    <Grid item md={6} lg={2}>
                        <FooterTitle variant='body1'>
                            My Account
                        </FooterTitle>
                        <List>
                            <ListItemText >
                                <Typography lineHeight={2} variant='caption2'>
                                    Login
                                </Typography>
                            </ListItemText>
                            <ListItemText >
                                <Typography lineHeight={2} variant='caption2'>
                                    My Card
                                </Typography>
                            </ListItemText>
                            <ListItemText >
                                <Typography lineHeight={2} variant='caption2'>
                                    My account
                                </Typography>
                            </ListItemText>
                            <ListItemText >
                                <Typography lineHeight={2} variant='caption2'>
                                    wishList
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>
                    <Grid item md={6} lg={4}>
                        <FooterTitle variant='body1'>
                            NewsLetter
                        </FooterTitle>
                        <Stack sx={{marginTop:"8px",color:Colors.white}}>
                            <SubscrbeTextField color="secondary"
                                label="Email address"
                                variant="standard" />
                            <Button startIcon={<Send sx={{ color: Colors.white }} />} sx={{ mt: 4, mb: 4 }}
                                variant="contained">
                                    Subscribe
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
