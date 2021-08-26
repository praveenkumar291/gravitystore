import { AppBar, Container, Toolbar, Typography,Link} from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import NextLink from 'next/link';

import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>e-cart</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
          <Typography className={classes.brand}>Gravitystore</Typography>

            </Link>

          </NextLink>
          <div className={classes.grow} ></div>
          <div >
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>

      </AppBar>
      <Container className={classes.main}>
        {children}
      </Container>
      <footer className={classes.footer}>
        <Typography>ALL right</Typography>
      </footer>
    </div>
  )
}
