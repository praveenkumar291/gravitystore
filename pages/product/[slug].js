import React from 'react';

import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import Image from 'next/image';
import { Grid,Link, List, ListItem, Typography ,Card,Button,} from '@material-ui/core'
import useStyles from '../../utils/styles1';




export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find(a => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return(
    <Layout title={product.name}>

      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>Back to products</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image  src={product.image}
            alt={product.name} style={{width: '80%', height: '80%'}}
            width={240}
            height={240}
            layout="responsive"></Image>

        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1"variant="h1">{product.name}</Typography>
            </ListItem>
            <ListItem>
            <Typography>category:{product.category}</Typography>
            </ListItem>
             <ListItem>
             <Typography> Brand:{product.brand}</Typography>
            </ListItem>
               <ListItem>
             <Typography> Rating:{product.rating} stars ({product.numReviews}reviews)</Typography>
            </ListItem>
             <ListItem>
              Description:
              <Typography>{product.description}</Typography>
            </ListItem>



          </List>


        </Grid>
        <Grid item md={3} xs={12}>

          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>

                  </Grid>
                  <Grid item>
                    <Typography>${product.price}</Typography>
                  </Grid>

                </Grid>


              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>

                  </Grid>
                  <Grid item>
                    <Typography>{product.countInstock>0?'Instock':'Unavilable'}</Typography>
                  </Grid>

                </Grid>


              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Add to cart
                  </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>

      </Grid>
  </Layout>
  )

};
