import { Grid, Typography } from '@material-ui/core';
import React, { useContext } from 'react'
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import NextLink from 'next/link';



function cartScreen() {
  const { state } = useContext(Store);
  const { cart: { cartItems } } = state;
  return (
    <Layout title="MY Cart">
      <Typography component="h1" variant="h1">
        MY cart

      </Typography>
      {cartItems.length === 0 ? (<div>Cart is empity.<NextLink href="/">Go Shopping</NextLink></div>):

        (
          <Grid container spacing={1}>
            <Grid item md={9} xs={12}>

              table of cart items
            </Grid>
            <Grid md={3} xs={12}>

              cart actions
            </Grid>


          </Grid>

        )}


    </Layout>
  )
}

export default cartScreen;
