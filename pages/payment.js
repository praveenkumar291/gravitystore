import { FormControl, FormControlLabel, List, ListItem, Radio, RadioGroup, Typography,Button } from '@material-ui/core';
import Cookies from 'js-cookie'
import  { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import ChekoutWizard from '../components/ChekoutWizard';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import useStyles from '../utils/styles1';


const payment = () => {
  const classes = useStyles
  const  router  = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');
  const { state, dispatch } = useContext(Store);
  const { cart: { shippingAddress }, } = state;
  useEffect(() => {
    if (!shippingAddress.address) {

      // router.push('/shipping')
    } else {
      setPaymentMethod(Cookies.get('paymentMethod') || '');
    }


  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <Layout title="Payment Method">
      <ChekoutWizard activeStep={2} />
      <form classNmae={classes.form} onSubmit={submitHandler}>
        <Typography component="h1" variant="h1">Payment</Typography>

        <List>

          <ListItem>
            <FormControl component="fieldset">
              <RadioGroup aria-label="Payment" name="payment" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>

                <FormControlLabel label="PayPal" value="Paypal" control={<Radio />}></FormControlLabel>
                <FormControlLabel label="PhonePay" value="PhonePay" control={<Radio />}></FormControlLabel>
                 <FormControlLabel label="Cod" value="Cod" control={<Radio/>}></FormControlLabel>
             </RadioGroup>
            </FormControl>
          </ListItem>
          <ListItem>
            <Button fullWidth type="submit" variant="contained" color="primary">Continue</Button>
        </ListItem>
          <ListItem>
            <Button fullWidth type="button" variant="contained" onClick={()=>router.push('/shipping')}>Back</Button>
        </ListItem>
        </List>
      </form>

   </Layout>
  )
}

export default payment
