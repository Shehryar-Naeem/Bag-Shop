import './App.css';
import { Box, Button, Container, ThemeProvider, Typography, styled } from '@mui/material';
import { theme } from './styles/theme';
import Appbar from './component/appbar';
import Banner from './component/Banner';
import Promotions from './component/Promotions';
import Products from './component/Products';
import Footer from './component/Footer';
import AppDrawer from './component/Drawer';
import { UIProvider } from './context/ui';
import SearchBox from './component/SearchBox';
// const CustomeButton=  styled(Button)({
//   background:"yellow",
//   padding:"10px 15px",
//   "&:hover":{
//     background:"green",
//     color:"blue"
//   }
// })
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>

        <Container maxWidth={"xl"}>
          <UIProvider>

            <Appbar />
            <Banner />
            <Promotions />
            <Box display={"flex"} justifyContent={"center"} sx={{ p: 4, textTransform: "capitalize" }}>
              <Typography variant='h4'>
                our products
              </Typography>
            </Box>
            <Products />
            <Footer />
            <AppDrawer />
            <SearchBox/>
          </UIProvider>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
