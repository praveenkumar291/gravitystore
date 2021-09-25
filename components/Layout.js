import { AppBar, Badge, Container, createMuiTheme, CssBaseline, Link, Switch, ThemeProvider, Toolbar, Typography } from '@material-ui/core/';
import Cookies from 'js-cookie';
import Head from 'next/head';
import NextLink from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';
import useStyles from '../utils/styles1';
// import Link from '../next/link';


export default function Layout({ title,  discription,children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode,cart } = state;
  const theme = createMuiTheme({

    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: '400',
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: '400',
        margin: '1rem 0',
      },
    },
    palette: {
      type: darkMode? 'dark' : 'light',
      primary: {
        main:'#f0c000',
      },
      secondary: {
        main:'#208080',
      },

    },
  });
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode',newDarkMode?'ON':'OFF');
  }
  return (
    <div>
      <Head>
        <title>{title ? `${title}- e-cart` : `e-cart`}</title>
        {discription && <meta name="description" content={discription} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>



      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
          <Typography className={classes.brand}>Gravitystore</Typography>

            </Link>

          </NextLink>
          <div className={classes.grow} ></div>
            <div >
              <Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
            <NextLink href="/cart" passHref>
                <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge color="secondary" badgeContent={cart.cartItems.length}>Cart</Badge>
                  ) : (
                    'Cart'
                  )}
                </Link>
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
        </ThemeProvider>
    </div>
  )
}
