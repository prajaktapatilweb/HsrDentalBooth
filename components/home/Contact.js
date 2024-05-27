import React from 'react';
import { Typography, Card, Link } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Axios from 'axios';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import AppTextField from '../Formik/AppTextField';
import { Button, FormControl, Grid, InputLabel } from '@mui/material';
import CustomizedSelectFormik from '../Formik/CustomizedSelectFormik';
import { useRouter } from 'next/router';
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from "@mui/material/IconButton";


const All = [
  { key: 1, text: 'Braces/ aligners', value: 'Braces/ aligners' },
  { key: 2, text: 'Dental implants', value: 'Dental implants' },
  { key: 3, text: 'Dental veneers (smile designing)', value: 'Dental veneers (smile designing)' },
  { key: 4, text: 'Full mouth rehabilitation', value: 'Full mouth rehabilitation' },
  { key: 5, text: 'Pediatric (kids dentistry)', value: 'Pediatric (kids dentistry)' },
  { key: 6, text: 'Root canal', value: 'Root canal' },
  { key: 7, text: 'Wisdom teeth extraction/ Teeth extraction', value: 'Wisdom teeth extraction/ Teeth extraction' },
  { key: 8, text: 'Other', value: 'Other' }
];
const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .email('Please enter valid email ID')
    .required('Email ID is required'),
  mobilenumber: yup
    .string()
    .required('Mobile Number is mandatory')
    .matches(/^[0-9]+$/, 'Only digits are allowed for this field ')
    .length(10, 'Only 10 digit mobile number'),
  selection: yup
    .string()
    .required('It is required'),
});

const Contact = () => {

  const contactno1 = "+919833389890";
  const contactno2 = "+919702955057";

  const router = useRouter()
  const onSubmit = async (values, submitProps) => {
    console.log({ values })
    Axios.post("/api/nodemail", {
      // Axios.post("/api/sendemail", {
      name: values.name,
      email: values.email,
      mobileno: values.mobilenumber,
      msg: values.msg,
      selection: values.selection

    })
      .then(function (response) {
        //handle success
        // console.log('Success')
        router.push('/thankyou')
        submitProps.setSubmitting(false);
        submitProps.resetForm();
      })
      .catch(function (response) {
        // handle error
        console.log('Rrtt', response)
        alert("Error in submission. Please resubmit");
      });
  };

  return (
    <Box id='contactform' sx={{ backgroundColor: '#f3fbfd' }}>
      <Container >
        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" class="contact">
          <div class="container">

            <div class="section-title">
              <h2>Contact</h2>
            </div>

          </div>

          {/* <div>
            <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
          </div> */}


          <Grid container spacing={2}>
            <Grid item xs={12} md={6} height='100%' sx={{display:'flex'}}>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}  sx={{display:'flex',height:{sx:'35%',md:'50%'}}}>
                  <div class="info-box" style={{ background: '#ffffff' }}>

                    <i class="bx"><LocationOnIcon /></i>
                    <h3 style={{fontSize:'18px'}}>Dynamic Dental Care Airoli</h3>
                    <p>R.No. B-001, Plot No. A-6/2, Suvarna Dham Bldg, Sector 9, Near HDFC Bank, Airoli, Navi Mumbai - 400 708.</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} sx={{display:'flex',display:'flex',height:{sx:'35%',md:'50%'}}}>
                  <div class="info-box" style={{ background: '#ffffff' }}>

                    <i class="bx"><LocationOnIcon /></i>
                    <h3 style={{fontSize:'18px'}}>Dynamic Dental Care Thane</h3>
                    <p>Shop No.1, Ground Floor, New Sahjeevan Society, near Panchganga, 2nd Rabodi, Thane West, Thane 400601.
</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div class="info-box mt-4" style={{ background: '#ffffff' }}>
                    <i class="bx"><EmailTwoToneIcon style={{ color: '#49caeb' }}></EmailTwoToneIcon></i>
                    <h3>Working Hours</h3>
                    <p>Monday to Sunday:<br/>
10:00 AM – 02:00 PM<br/>
05:00 PM – 10:00 PM
</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div class="info-box mt-4" style={{ background: '#ffffff' }}>
                    {/* <IconButton aria-label="phone" style={{ color: '#49caeb' }}> */}
                    <i class="bx">
                      <CallTwoToneIcon style={{ color: '#49caeb' }} />
                    </i>
                    {/* </IconButton> */}
                    <h3>Contact Us</h3>
                    
                                <br/>
                                <Link href={`tel:${contactno2}`} target="_blank">
                                        +919702955057
                                </Link>
                               <br/>
                               <Link  href={`tel:${contactno1}`} target="_blank">
                                    +919833389890
                                </Link>{" "}
                                <Link 
                               href={`mailto:${'Dynamicdentalcare2013@gmail.com'}`} target="_blank">
                                    Dynamicdentalcare2013@gmail.com
                                </Link>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ px: 3, py: 4 }}>
                <Formik
                  validateOnChange={true}
                  initialValues={{
                    name: '',
                    email: '',
                    mobilenumber: '',
                    msg: '',
                    selection: ''
                  }}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {({ initialValues, values, errors, isSubmitting }) => (
                    <Form style={{ textAlign: 'left' }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <AppTextField
                            placeholder='name'
                            name='name'
                            label='Name'
                            sx={{
                              width: '100%',
                              '& .MuiInputBase-input': {
                                fontSize: 14,
                              },
                            }}
                            variant='outlined'
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <AppTextField
                            placeholder='Email'
                            name='email'
                            label='Email ID'
                            sx={{
                              width: '100%',
                              '& .MuiInputBase-input': {
                                fontSize: 14,
                              },
                            }}
                            variant='outlined'
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <AppTextField
                            placeholder='Mobile Number'
                            name='mobilenumber'
                            label='Mobile Number'
                            sx={{
                              width: '100%',
                              '& .MuiInputBase-input': {
                                fontSize: 14,
                              },
                            }}
                            variant='outlined'
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <FormControl
                            sx={{
                              width: '100%',
                              // mt: 2,
                              '&.MuiInputBase-input': { fontSize: 14 },
                            }}
                          >
                            <InputLabel id='demo-simple-select-label'>
                              Select your interest
                            </InputLabel>
                            <Field
                              name='selection'
                              as='select'
                              options={All}
                              component={CustomizedSelectFormik}
                            ></Field>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} >
                          <Box sx={{ mb: { xs: 5, lg: 8 } }}>
                            <AppTextField
                              placeholder='Message'
                              name='msg'
                              label='Message'
                              sx={{
                                width: '100%',
                                '& .MuiInputBase-input': {
                                  fontSize: 14,
                                },
                              }}
                              variant='outlined'
                              multiline
                              rows='4'
                            />
                          </Box>
                        </Grid>
                      </Grid>
                      {/* <pre>{JSON.stringify(errors, null, 4)}</pre> */}
                      {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}

                      <div>
                        <Button
                          variant='contained'
                          color='primary'
                          disabled={isSubmitting}
                          sx={{
                            // fontWeight: Fonts.REGULAR,
                            textTransform: 'capitalize',
                            fontSize: 16,
                            minWidth: 160,
                          }}
                          type='submit'
                        >
                          Submit
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Card>
            </Grid>
          </Grid>

        </section>
        {/* <!-- End Contact Section --> */}
      </Container>
    </Box>
  );
};
export default Contact;
