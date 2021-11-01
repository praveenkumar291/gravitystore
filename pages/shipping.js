
import {
  Button, List,
  ListItem, TextField, Typography
} from '@material-ui/core';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ChekoutWizard from '../components/ChekoutWizard';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import useStyles from '../utils/styles1';

export default function Shipping() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue
  } = useForm();
  const router = useRouter();
  const { redirect } = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo,cart:{shippingAddress} } = state;
  useEffect(() => {
    if (!userInfo) {
      router.push('/login?redirect=/shipping');


    }
     setValue('fullName', shippingAddress.fullName);
      setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
      setValue('postalCode', shippingAddress.postalCode);

      setValue('country', shippingAddress.country);

      setValue('phoneNumber', shippingAddress.phoneNumber);

  }, []);

  const classes = useStyles();
  const submitHandler = ({ fullName, address, city, postalCode, country,phoneNumber }) => {




    dispatch({ type: 'SAVE_SHIPPING_ADDRESS', payload: { fullName, address, city, postalCode,country ,phoneNumber} });
    Cookies.set('Shipping Address', {fullName, address, city, postalCode,country,phoneNumber});
    router.push('/payment');


  }
  return (
    <Layout title="Shipping Address">
      <ChekoutWizard activeStep={1}/>
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <Typography component="h1" variant="h1">
          Shipping Address
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="fullname"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="fullname"
                  label="FullName"

                  error={Boolean(errors.fullname)}
                  helperText={
                    errors.fullname
                      ? errors.fullname.type === 'minLength'
                        ? 'FullName length is more than 1'
                        : 'FullName is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="address"
                  label="Address"

                  error={Boolean(errors.address)}
                  helperText={
                    errors.address
                      ? errors.address.type === 'minLength'
                        ? 'Address length is more than 1'
                        : 'Address is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="city"
                  label="City"

                  error={Boolean(errors.city)}
                  helperText={
                    errors.city
                      ? errors.city.type === 'minLength'
                        ? 'City length is more than 1'
                        : 'City is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="postalCode"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="postalCode"
                  label="PostalCode"

                  error={Boolean(errors.postalCode)}
                  helperText={
                    errors.postalCode
                      ? errors.postalCode.type === 'minLength'
                        ? 'PostalCodelength is more than 1'
                        : 'PostalCode is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
           <ListItem>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="country"
                  label="Country"

                  error={Boolean(errors.country)}
                  helperText={
                    errors.country
                      ? errors.country.type === 'minLength'
                        ? 'Countrylength is more than 1'
                        : 'Country is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
           <ListItem>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="phoneNumber"
                  label="PhoneNumber"

                  error={Boolean(errors.phoneNumber)}
                  helperText={
                    errors.phoneNumber
                      ? errors.phoneNumber.type === 'minLength'
                        ? 'PhoneNumber length is more than 1'
                        : 'PhoneNumber is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>



          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
             Continue
            </Button>
          </ListItem>

        </List>
      </form>
    </Layout>
  );
}
