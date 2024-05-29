import { Suspense, lazy } from "react";
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
import { MainLayout } from '../components/layout';
import Equipment from '../components/home/Equipment';
import Dentalservices from '../components/home/Dentalservices';
import DrAkshay from '../components/home/DrAkshay';
import Contact from '../components/home/Contact';
import LabTabs from '../components/home/LabTabs';
import HomeHero from "../components/home/hero";
import Clinicinfo from "../components/home/Clinicinfo";
import Drgallery1 from "../components/home/Drgallery1";
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>

<Clinicinfo/>
      <Dentalservices></Dentalservices>
    <Drgallery1/>
      {/* <DrAkshay></DrAkshay> */}
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

