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
import Team from "../components/home/Team";
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
<HomeHero/>
vhggffgh
<Clinicinfo/>
      <Dentalservices></Dentalservices>
      <Team/>
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

