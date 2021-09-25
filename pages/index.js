import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import db from '../utils/db';
import Product from '../models/Product';

export default function Home(props) {
  const {products} = props;


  return (
    <>
    <Layout>
    <div>
      <h1>products</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product.name}>
             <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
              <CardActionArea>
                <CardMedia component= "img" image={product.image} title={product.name}></CardMedia>
                <CardContent>
                  <Typography>
                    {product.name}
                  </Typography>
                </CardContent>
                  </CardActionArea>
                  </NextLink>
              <CardActions>
                <Typography>${product.price}</Typography>
                <Button size="small" color="primary">Add to cart</Button>
              </CardActions>
            </Card>
            </Grid>
          ))}
     </Grid>
      </div>
      </Layout>
      </>
  )
}
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),

    },

  };
}

// export async function getServerSideProps() {
//   await db.connect();
//   const featuredProductsDocs = await Product.find(
//     { isFeatured: true },
//     '-reviews'
//   )
//     .lean()
//     .limit(3);
//   const topRatedProductsDocs = await Product.find({}, '-reviews')
//     .lean()
//     .sort({
//       rating: -1,
//     })
//     .limit(6);
//   await db.disconnect();
//   return {
//     props: {
//       featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
//       topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
//     },
//   };
// }

// // export async function getServerSideProps() {
// //   await db.connect();
// //   const featuredProductsDocs = await Product.find(
// //     { isFeatured: true },
// //     '-reviews'
// //   )
// //     .lean()
// //     .limit(3);
// //   const topRatedProductsDocs = await Product.find({}, '-reviews')
// //     .lean()
// //     .sort({
// //       rating: -1,
// //     })
// //     .limit(6);
// //   await db.disconnect();
// //   return {
// //     props: {
// //       featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
// //       topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
// //     },
// //   };
// // }
