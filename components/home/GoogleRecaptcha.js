import { ErrorMessage } from 'formik';
import React, {useRef} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function GoogleRecaptcha() {
  const recaptchaRef = useRef();
  return (
    <div>
        <ReCAPTCHA
          sitekey='6LeniPkpAAAAACQxReSm_DpRnTGqxwtrqUilSRlq'
        //   sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          ref={recaptchaRef}
          onChange={(value) => setFieldValue('recaptcha', value)}
        />
        <ErrorMessage name='recaptcha' component='div'  style={{color:'red'}}/>
    </div>
  );
}
