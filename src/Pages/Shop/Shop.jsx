import { Box, CircularProgress, Container, Grid } from "@material-ui/core"
import Sidebar from './Parts/Sidebar';
import Products from './Parts/Products/Products';
import Banner from '../../components/common/Banner';
import TopBar from "./Parts/TopBar";
import BreadCrumb from "../../components/common/BreadCrumb";
import React from "react";


const Shop = ({ data, isLoading, error, addTocartHandler }) => {
    // const results = data.filter(product => product.price < 10);

    return (
        <Box mb={5}>
            <Banner />
            <Container>
                <BreadCrumb thisRoute='shop' />
                <Box mt={4}>
                    <Grid container>
                        <Grid item xs={12} sm={2}>
                            <Sidebar data />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TopBar />
                            <Box px={5}>
                                <Grid container justify='space-between' alignItems='center'>
                                    {isLoading && <Grid container justify='center'>
                                        <CircularProgress />
                                    </Grid>}
                                    {data.map((products) => (
                                        <Grid item xs={12} sm={4} key={products.id}>
                                            <Products products={products} isloading={isLoading} error={error} addItem={addTocartHandler} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box >
    )
}

export default React.memo(Shop)
