import { Suspense, lazy } from "react";
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
import { MainLayout } from '../components/layout';
import Equipment from '../components/home/Equipment';
import Dentalservices from '../components/home/Dentalservices';
import Contact from '../components/home/Contact';
import Clinicinfo from "../components/home/Clinicinfo";
import Centermode from "../components/home/Centermode";
import DrAkshay from "../components/home/DrAkshay";
import Countdown from "../components/home/Countdown";
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
   <Countdown/> 
<Clinicinfo/>

      <Dentalservices></Dentalservices>
      <DrAkshay></DrAkshay>
      {/* <Centermode/> */}
      <Suspense fallback=
        {<div>Component are loading please wait...</div>}>
        <Photogallery />
        <Testimonial></Testimonial>
      </Suspense>
      <Equipment />
      <Contact></Contact>

    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

