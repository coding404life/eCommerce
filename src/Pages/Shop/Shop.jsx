import { Box, Container, Grid } from "@material-ui/core"
import Sidebar from './Parts/Sidebar';
import Product from './Parts/Products/Product';
import Banner from '../../components/common/Banner';
import TopBar from "./Parts/TopBar";
import BreadCrumb from "../../components/common/BreadCrumb";
import React from "react";

const Shop = () => {
    return (
        <Box mb={5}>
            <Banner />
            <Container>
                <BreadCrumb thisRoute='shop' />
                <Box mt={4}>
                    <Grid container>
                        <Grid item xs={12} sm={2}>
                            <Sidebar />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TopBar />
                            <Box px={5}>
                                <Grid container justify='space-between'>
                                    <Grid item xs={12} sm={4}>
                                        <Product />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Product />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Product />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Product />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Product />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Product />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Product />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box >
    )
}

export default Shop
