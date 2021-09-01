import { AppBar, Container, Toolbar, Typography,Link, createMuiTheme, ThemeProvider, CssBaseline,darkMode, Switch} from '@material-ui/core/'
import Head from 'next/head'
import React, { useContext } from 'react'
import NextLink from 'next/link';

import useStyles from '../utils/styles1';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
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
        </ThemeProvider>
    </div>
  )
}
