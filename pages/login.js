import { Button, Link, List, ListItem, TextField, Typography } from '@material-ui/core'
import React from 'react'
import Layout from '../components/Layout'
import useStyles from '../utils/styles1';
import NextLink from 'next/link';

function Login() {
  const classes = useStyles ();
  return (
    <Layout title="Login">
      <form className={classes.form}>
      <Typography component="h1" variant="h1">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField variant="outlined" fullWidth id="email" label="Email" inputProps={{type: 'email'}}>

            </TextField>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <TextField variant="outlined" fullWidth id="password" label="Password" inputProps={{type: 'password'}}>

            </TextField>
          </ListItem>
          <ListItem>

            <Button variant="contained" type="submit" fullWidth color="primary">

              Login
        </Button>
          </ListItem>

          <ListItem>

            Don't have an account?&nbsp; {''}<NextLink href="/register" passHref><Link>
            Register
              </Link>
            </NextLink>
          </ListItem>




          </List>


</form>
    </Layout>
  )
}

export default Login
