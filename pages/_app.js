import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "../utils";
import { MUIProvider } from "../providers";
import "slick-carousel/slick/slick.css";
import "../assets/css/style.css";
import "../components/home/heroadd/hero1.css";


// import "../styles/globals.css";
import "../styles/react-slick.css";
import { useRouter } from "next/router";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
    const { asPath } = useRouter()
    // console.log('RRRRR', asPath.split('/')[1] === 'blogs')
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                {(() => {
                    switch (asPath.split('/')[1]) {
                        case 'blogs':
                            return (<>
                                <title>
                                    Dental Implants: An Ancient Treatment Redefined by Modern Technology
                                </title>
                                <meta name="title" content="Dental Implants: An Ancient Treatment Redefined by Modern Technology"></meta>
                                <meta name='description' content="Explore the fascinating history of dental implants in our latest blog. From ancient attempts to modern innovations, witness the remarkable evolution of dental implant technology and its transformative impact on oral health."></meta>
                                <meta property="og:type" content="article" />
                                <meta property="og:title" content="Dental Implants: An Ancient Treatment Redefined by Modern Technology" />
                                <meta property="og:description" content="Explore the fascinating history of dental implants in our latest blog. From ancient attempts to modern innovations, witness the remarkable evolution of dental implant technology and its transformative impact on oral health." />
                                <meta property="og:site_name" content="Dr. Akshay's DentAvenue" />
                                <meta property="og:url" content="https://www.dentavenue.in/blogs/history-of-dental-implants" />
                                <meta property="og:image" content="https://www.dentavenue.in/_next/image?url=%2Fimages%2Fblog%2Fimg1.jpg&w=1920&q=75" />
                                <meta name="twitter:card" content="summary_large_image" />
                                <meta name="twitter:site" content="@DentavenueM" />
                                <meta name="twitter:title" content="Dr. Akshay's DentAvenue" />
                                <meta name="twitter:description" content="Explore the fascinating history of dental implants in our latest blog. From ancient attempts to modern innovations, witness the remarkable evolution of dental implant technology and its transformative impact on oral health." />
                                <meta name="twitter:image" content="https://www.dentavenue.in/_next/image?url=%2Fimages%2Fblog%2Fimg1.jpg&w=1920&q=75" />
                                <link rel="canonical" href="https://www.dentavenue.in/blogs/history-of-dental-implants" />
                            </>)
                        case 'trainer':
                            return (<>
                                <title>
                                    One-Day Intensive Implantology Training Session - Dr. Akshay's DentAvenue
                                </title>
                                <meta name="title" content="One-Day Intensive Implantology Training Session - Dr. Akshay's DentAvenue"></meta>
                                <meta name='description' content="Explore our successful one-day training session on basic Implantology at Dr. Akshay's DentAvenue. Gain practical insights and access cutting-edge materials through expert-led lectures and hands-on experience with HIOSSEN Implants."></meta>
                                <link rel="canonical" href="https://www.dentavenue.in/trainer" />
                                <meta property="og:type" content="Training Session" />
                                <meta property="og:title" content="One-Day Intensive Implantology Training Session at Dr. Akshay's DentAvenue" />
                                <meta property="og:description" content="Explore our successful one-day training session on basic Implantology at Dr. Akshay's DentAvenue. Gain practical insights and access cutting-edge materials through expert-led lectures and hands-on experience with HIOSSEN Implants." />
                                <meta property="og:site_name" content="Dr. Akshay's DentAvenue" />
                                <meta property="og:url" content="https://www.dentavenue.in/trainer" />
                                <meta property="og:image" content="https://www.dentavenue.in/_next/image?url=%2Fimages%2Ftranies%2Ftrainers1.jpeg&w=1920&q=75" />
                            </>)
                        case 'blog':
                            return (<>
                                <title>
                                    Discover the Latest Insights in Dental Care at Our Blog
                                </title>
                                <meta name="title" content="Discover the Latest Insights in Dental Care at Our Blog"></meta>
                                <meta name='description' content="Stay informed and educated on all things dental with our blog. Explore informative articles, helpful tips, and expert advice to maintain your oral health and enhance your smile."></meta>
                                <link rel="canonical" href="https://www.dentavenue.in/blog" />
                                <meta property="og:type" content="Website Blogs" />
                                <meta property="og:title" content="Discover the Latest Insights in Dental Care at Our Blog" />
                                <meta property="og:description" content="Stay informed and educated on all things dental with our blog. Explore informative articles, helpful tips, and expert advice to maintain your oral health and enhance your smile." />
                                <meta property="og:site_name" content="Dr. Akshay's DentAvenue" />
                                <meta property="og:url" content="https://www.dentavenue.in/blog" />
                                <meta property="og:image" content="https://www.dentavenue.in/_next/image?url=%2Fimages%2Flogo1.jpg&w=256&q=75" />
                            </>)
                        case 'services':
                            switch (asPath.split('/')[2]) {
                                case 'dental-implants-in-chembur':
                                    return <>
                                        <title>
                                        Dynamic Dental Care Airoli | Thane
                                        </title>
                                        <meta name="title" content="Dental Implant Clinic in Chembur | Implantologist in Chembur"></meta>
                                        <meta name='description' content="Welcome to our dental implant clinic in Chembur, where your journey to a confident and radiant smile begins. Our team of experienced implantologists in Chembur is dedicated to providing top-notch dental implant services right here."></meta>
                                        <link rel="canonical" href="https://www.dentavenue.in/services/dental-implants-in-chembur" />
                                    </>
                                case 'root-canals-in-chembur':
                                    return <>
                                        <title>
                                            Root Canal Treatment in Chembur | Endodontist in Chembur
                                        </title>
                                        <meta name="title" content="Root Canal Treatment in Chembur | Endodontist in Chemburr"></meta>
                                        <meta name='description' content="Root Canal Treatment in Chembur becomes a seamless experience with our skilled Endodontist. Delivering expert Endodontic services, our dedicated team prioritizes your well-being for optimal oral health and relief. Experience specialized care for your dental needs in Chembur."></meta>
                                        <link rel="canonical" href="https://www.dentavenue.in/services/root-canals-in-chembur" />
                                    </>
                                case 'tooth-extraction-in-chembur':
                                    return <>
                                        <title>
                                            Tooth Extraction in Chembur | Wisdom Tooth Removal In Chembur
                                        </title>
                                        <meta name="title" content="Tooth Extraction in Chembur | Wisdom Tooth Removal In Chembur"></meta>
                                        <meta name='description' content="Experience expert tooth extraction services in Chembur, including precise Wisdom Tooth Removal. Our skilled dental professionals prioritize pain-free procedures, preventive care, and comprehensive post-extraction guidance for a smooth recovery."></meta>
                                        <link rel="canonical" href="https://www.dentavenue.in/services/tooth-extraction-in-chembur" />
                                    </>
                                case 'teeth-braces-in-chembur':
                                    return <>
                                        <title>
                                            Teeth Braces in Chembur | Orthodontists In Chembur
                                        </title>
                                        <meta name="title" content="Teeth Braces in Chembur | Orthodontists In Chembur"></meta>
                                        <meta name='description' content="Transform your smile with Teeth Braces in Chembur. Our skilled orthodontists in Chembur offer personalized treatments, ensuring a journey to a straighter and healthier smile."></meta>
                                        <link rel="canonical" href="https://www.dentavenue.in/services/teeth-braces-in-chembur" />
                                    </>
                                case 'kids-dentist-in-chembur':
                                    return <>
                                        <title>
                                            Kids Dental Clinic in Chembur | Paediatric Dentist In Mumbai
                                        </title>
                                        <meta name="title" content="Kids Dental Clinic in Chembur | Paediatric Dentist In Mumbai"></meta>
                                        <meta name='description' content="Discover specialized care for young smiles at our Kids Dental Clinic in Chembur. Our expert paediatric dentists in Mumbai ensure a gentle and enjoyable dental experience for children, promoting optimal oral health from an early age."></meta>
                                        <link rel="canonical" href="https://www.dentavenue.in/services/kids-dentist-in-chembur" />
                                    </>
                                case 'teeth-whitening-in-chembur':
                                    return <>
                                        <title>
                                            Teeth Whitening Treatment in Chembur
                                        </title>
                                        <meta name="title" content="Teeth Whitening Treatment in Chembur"></meta>
                                        <meta name='description' content="Transform your smile with our professional Teeth Whitening Treatment in Chembur. Experience the confidence of a brighter and whiter smile with our advanced dental care at Dr. Akshay's DentAvenue."></meta>
                                        <link rel="canonical" href="https://www.dentavenue.in/services/teeth-whitening-in-chembur" />
                                    </>
                                case 'smile-designing-in-chembur':
                                    return <>
                                        <title>
                                            Smile Designing in Chembur East | Smile Makeover in Chembur
                                        </title>
                                        <meta name="title" content="Smile Designing in Chembur East | Smile Makeover in Chembur"></meta>
                                        <meta name='description' content="Achieve the perfect smile with our Smile Designing in Chembur East. Experience a transformative Smile Makeover in Chembur, combining artistry and precision for a radiant and confident new look."></meta>
                                        <link rel="canonical" href="https://www.dentavenue.in/services/smile-designing-in-chembur" />
                                    </>
                                case 'dental-fillings-in-chembur':
                                    return <>
                                        <title>
                                            Dental Fillings in Chembur | Tooth Filling cost in Chembur
                                        </title>
                                        <meta name="title" content="Dental Fillings in Chembur | Tooth Filling cost in Chembur"></meta>
                                        <meta name='description' content="Transform your smile with expert dental fillings treatment in Chembur. Experience top-notch care and precise solutions for dental cavity fillings and composite tooth fillings. Schedule a consultation for comprehensive dental filling services."></meta>
                                        <link rel="canonical" href="https://www.dentavenue.in/services/dental-fillings-in-chembur" />
                                    </>
                                case 'crown-and-bridges-treatment-in-chembur':
                                    return <>
                                        <title>
                                            Crown And Bridges Treatment In Chembur East
                                        </title>
                                        <meta name="title" content=" Crown And Bridges Treatment In Chembur East"></meta>
                                        <meta name='description' content="Elevate your smile with exceptional Crown and Bridges Treatment in Chembur East at Dr. Akshay's DentAvenue. Restore damaged or missing teeth with our skilled prosthodontists, ensuring natural-looking results and long-lasting durability."></meta>
                                        <link rel="canonical" href="https://www.dentavenue.in/services/crown-and-bridges-treatment-in-chembur" />
                                    </>

                            }
                        default:
                            return (<>
                                <title>
                                    Dentist in Chembur | Dental Clinic Chembur - Dr. Akshay's DentAvenue
                                </title>
                                <meta name="title" content="Dentist in Chembur | Dental Clinic in Chembur Near Me"></meta>
                                <meta name='description' content="Are you in search of a trusted dentist in Chembur East? Your journey ends at Dr. Akshay's DentAvenue Dental Clinic in Chembur. With a team of seasoned professionals, we provide a wide array of dental services, encompassing general dentistry, teeth whitening, dental implants, root canal treatments, and more. Let's embark on the path to a healthy and radiant smile together. Pay a visit to our clinic today!"></meta>
                                <meta property="og:type" content="website" />
                                <meta property="og:title" content="Premier Dental Care in Chembur" />
                                <meta property="og:description" content="Experience premier dental care in Chembur for your brightest, healthiest smile." />
                                <meta property="og:site_name" content="Dr. Akshay's DentAvenue" />
                                <meta property="og:url" content="https://www.dentavenue.in/" />
                                <meta property="og:image" content="https://www.dentavenue.in/images/dr-akshays-dentavenue-dental-clinic-chembur-mumbai.webp" />
                                <meta name="twitter:card" content="summary_large_image" />
                                <meta name="twitter:site" content="@DentavenueM" />
                                <meta name="twitter:title" content="Dr. Akshay's DentAvenue" />
                                <meta name="twitter:description" content="Experience premier dental care in Chembur for your brightest, healthiest smile." />
                                <meta name="twitter:image" content="https://www.dentavenue.in/dr-akshays-dentavenue-dental-clinic-chembur-mumbai.webp" />
                                <link rel="canonical" href="https://www.dentavenue.in/"></link>
                                <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.stringify({
                                            "@context": "https://schema.org",
                                            "@type": "LocalBusiness",
                                            name: "Dr. Akshay's DentAvenue Dental Clinic",
                                            image:
                                                "https://www.dentavenue.in/_next/image?url=%2Fimages%2Fherodental2.jpg&w=1920&q=75",
                                            "@id": "",
                                            url: "https://www.dentavenue.in/",
                                            telephone: "79000 74487",
                                            priceRange: "$",

                                            address: {
                                                "@type": "PostalAddress",
                                                streetAddress:
                                                    "302, Third Floor, Abhishek Complex, Opposite to BMC M WEST WARD OFFICE, 1st Road, Chembur",
                                                addressLocality: "Mumbai",
                                                postalCode: "400071",
                                                addressCountry: "IN",
                                            },
                                            geo: {
                                                "@type": "GeoCoordinates",
                                                latitude: 19.0607957,
                                                longitude: 72.8997529,
                                            },
                                            openingHoursSpecification: [
                                                {
                                                    "@type": "OpeningHoursSpecification",
                                                    dayOfWeek: [
                                                        "Monday",
                                                        "Tuesday",
                                                        "Wednesday",
                                                        "Friday",
                                                        "Thursday",
                                                        "Saturday",
                                                    ],
                                                    opens: "10:00",
                                                    closes: "21:00",
                                                },
                                                {
                                                    "@type": "OpeningHoursSpecification",
                                                    dayOfWeek: "Sunday",
                                                    opens: "10:00",
                                                    closes: "16:00",
                                                },
                                            ],
                                            sameAs: [
                                                "https://www.facebook.com/profile.php?id=100082969286996",
                                                "https://twitter.com/DentavenueM",
                                                "https://www.youtube.com/channel/UCzTOsuUtM6GgJ6oUFEy5NvQ",
                                                "https://www.instagram.com/drakshaysdentavenue/",
                                                "https://www.linkedin.com/in/dr-akshay-s-dentavenue-282741255/",
                                            ],
                                        }),
                                    }}
                                />
                                <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.stringify({
                                            "@context": "https://schema.org",
                                            "@type": "Dentist",
                                            name: "Dr. Akshay Bandewar",
                                            image:
                                                "https://www.dentavenue.in/_next/image?url=%2Fimages%2Fdr%2Fdr12.jpg&w=1920&q=75",
                                            "@id": "",
                                            url: "https://www.dentavenue.in/",
                                            telephone: "79000 74487",
                                            priceRange: "$",
                                            address: {
                                                "@type": "PostalAddress",
                                                streetAddress:
                                                    "302, Third Floor, Abhishek Complex, Opposite to BMC M WEST WARD OFFICE, 1st Road, Chembur",
                                                addressLocality: "Mumbai",
                                                postalCode: "400071",
                                                addressCountry: "IN",
                                            },
                                            geo: {
                                                "@type": "GeoCoordinates",
                                                latitude: 19.0607957,
                                                longitude: 72.8997529,
                                            },
                                            openingHoursSpecification: [
                                                {
                                                    "@type": "OpeningHoursSpecification",
                                                    dayOfWeek: [
                                                        "Tuesday",
                                                        "Monday",
                                                        "Wednesday",
                                                        "Thursday",
                                                        "Friday",
                                                        "Saturday",
                                                    ],
                                                    opens: "10:00",
                                                    closes: "21:00",
                                                },
                                                {
                                                    "@type": "OpeningHoursSpecification",
                                                    dayOfWeek: "Sunday",
                                                    opens: "10:00",
                                                    closes: "16:00",
                                                },
                                            ],
                                            sameAs: [
                                                "https://www.practo.com/mumbai/doctor/akshay-bandewar-dentist-2",
                                                "https://www.bajajfinservhealth.in/doctor/mumbai/dentist/dr-akshay-bandewar",
                                                "https://www.lybrate.com/navi-mumbai/doctor/dr-akshay-bandewar-dentist",
                                                "https://www.clinicspots.com/clinic/dr-akshays-dentavenue",
                                                "https://www.dentavenue.in/",
                                            ],
                                        }),
                                    }}
                                />

                                <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.stringify({
                                            "@context": "https://schema.org",
                                            "@type": "Dentist",
                                            name: "Dr. Saudnya Rudrawar",
                                            image:
                                                "https://www.dentavenue.in/_next/image?url=%2Fimages%2Fdr%2Fdr11.jpg&w=1920&q=97",
                                            "@id": "",
                                            url: "https://www.dentavenue.in/",
                                            telephone: "79000 74487",
                                            priceRange: "$",
                                            address: {
                                                "@type": "PostalAddress",
                                                streetAddress:
                                                    "302, Third Floor, Abhishek Complex, Opposite to BMC M WEST WARD OFFICE, 1st Road, Chembur",
                                                addressLocality: "Mumbai",
                                                postalCode: "400071",
                                                addressCountry: "IN",
                                            },
                                            geo: {
                                                "@type": "GeoCoordinates",
                                                latitude: 19.0607957,
                                                longitude: 72.8997529,
                                            },
                                            openingHoursSpecification: [
                                                {
                                                    "@type": "OpeningHoursSpecification",
                                                    dayOfWeek: [
                                                        "Tuesday",
                                                        "Monday",
                                                        "Wednesday",
                                                        "Friday",
                                                        "Thursday",
                                                        "Saturday",
                                                    ],
                                                    opens: "10:00",
                                                    closes: "21:00",
                                                },
                                                {
                                                    "@type": "OpeningHoursSpecification",
                                                    dayOfWeek: "Sunday",
                                                    opens: "10:00",
                                                    closes: "16:00",
                                                },
                                            ],
                                            sameAs: [
                                                "https://www.practo.com/mumbai/doctor/saudnya-rudrawar-dentist",
                                                "https://www.lybrate.com/mumbai/doctor/dr-saudnya-bandewar-dentist",
                                                "https://www.clinicspots.com/doctor/saudnya-rudrawar",
                                                "https://www.linkedin.com/in/dr-saudnya-rudrawar-380b4421/",
                                            ],
                                        }),
                                    }}
                                />
                            </>)

                    }
                })()}
                {/* {asPath.split('/')[1] === 'blogs' ?
                    <>
                        <title>
                            Dental Implants: An Ancient Treatment Redefined by Modern Technology
                        </title>
                        <meta name="title" content="Dental Implants: An Ancient Treatment Redefined by Modern Technology"></meta>
                        <meta name='description' content="Explore the fascinating history of dental implants in our latest blog. From ancient attempts to modern innovations, witness the remarkable evolution of dental implant technology and its transformative impact on oral health."></meta>
                        <meta property="og:type" content="article" />
                        <meta property="og:title" content="Dental Implants: An Ancient Treatment Redefined by Modern Technology" />
                        <meta property="og:description" content="Explore the fascinating history of dental implants in our latest blog. From ancient attempts to modern innovations, witness the remarkable evolution of dental implant technology and its transformative impact on oral health." />
                        <meta property="og:site_name" content="Dr. Akshay's DentAvenue" />
                        <meta property="og:url" content="https://www.dentavenue.in/blogs/history-of-dental-implants" />
                        <meta property="og:image" content="https://www.dentavenue.in/_next/image?url=%2Fimages%2Fblog%2Fimg1.jpg&w=1920&q=75" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:site" content="@DentavenueM" />
                        <meta name="twitter:title" content="Dr. Akshay's DentAvenue" />
                        <meta name="twitter:description" content="Explore the fascinating history of dental implants in our latest blog. From ancient attempts to modern innovations, witness the remarkable evolution of dental implant technology and its transformative impact on oral health." />
                        <meta name="twitter:image" content="https://www.dentavenue.in/_next/image?url=%2Fimages%2Fblog%2Fimg1.jpg&w=1920&q=75" />
                        <link rel="canonical" href="https://www.dentavenue.in/blogs/history-of-dental-implants" />
                    </> :
                    <>
                        <title>
                            Dentist in Chembur | Dental Clinic Chembur - Dr. Akshay's DentAvenue
                        </title>
                        <meta name="title" content="Dentist in Chembur | Dental Clinic in Chembur Near Me"></meta>
                        <meta name='description' content="Are you in search of a trusted dentist in Chembur East? Your journey ends at Dr. Akshay's DentAvenue Dental Clinic in Chembur. With a team of seasoned professionals, we provide a wide array of dental services, encompassing general dentistry, teeth whitening, dental implants, root canal treatments, and more. Let's embark on the path to a healthy and radiant smile together. Pay a visit to our clinic today!"></meta>
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content="Premier Dental Care in Chembur" />
                        <meta property="og:description" content="Experience premier dental care in Chembur for your brightest, healthiest smile." />
                        <meta property="og:site_name" content="Dr. Akshay's DentAvenue" />
                        <meta property="og:url" content="https://www.dentavenue.in/" />
                        <meta property="og:image" content="https://www.dentavenue.in/images/dr-akshays-dentavenue-dental-clinic-chembur-mumbai.webp" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:site" content="@DentavenueM" />
                        <meta name="twitter:title" content="Dr. Akshay's DentAvenue" />
                        <meta name="twitter:description" content="Experience premier dental care in Chembur for your brightest, healthiest smile." />
                        <meta name="twitter:image" content="https://www.dentavenue.in/dr-akshays-dentavenue-dental-clinic-chembur-mumbai.webp" />
                        <link rel="canonical" href="https://www.dentavenue.in/"></link>
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "LocalBusiness",
                                    name: "Dr. Akshay's DentAvenue Dental Clinic",
                                    image:
                                        "https://www.dentavenue.in/_next/image?url=%2Fimages%2Fherodental2.jpg&w=1920&q=75",
                                    "@id": "",
                                    url: "https://www.dentavenue.in/",
                                    telephone: "79000 74487",
                                    priceRange: "$",

                                    address: {
                                        "@type": "PostalAddress",
                                        streetAddress:
                                            "302, Third Floor, Abhishek Complex, Opposite to BMC M WEST WARD OFFICE, 1st Road, Chembur",
                                        addressLocality: "Mumbai",
                                        postalCode: "400071",
                                        addressCountry: "IN",
                                    },
                                    geo: {
                                        "@type": "GeoCoordinates",
                                        latitude: 19.0607957,
                                        longitude: 72.8997529,
                                    },
                                    openingHoursSpecification: [
                                        {
                                            "@type": "OpeningHoursSpecification",
                                            dayOfWeek: [
                                                "Monday",
                                                "Tuesday",
                                                "Wednesday",
                                                "Friday",
                                                "Thursday",
                                                "Saturday",
                                            ],
                                            opens: "10:00",
                                            closes: "21:00",
                                        },
                                        {
                                            "@type": "OpeningHoursSpecification",
                                            dayOfWeek: "Sunday",
                                            opens: "10:00",
                                            closes: "16:00",
                                        },
                                    ],
                                    sameAs: [
                                        "https://www.facebook.com/profile.php?id=100082969286996",
                                        "https://twitter.com/DentavenueM",
                                        "https://www.youtube.com/channel/UCzTOsuUtM6GgJ6oUFEy5NvQ",
                                        "https://www.instagram.com/drakshaysdentavenue/",
                                        "https://www.linkedin.com/in/dr-akshay-s-dentavenue-282741255/",
                                    ],
                                }),
                            }}
                        />
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "Dentist",
                                    name: "Dr. Akshay Bandewar",
                                    image:
                                        "https://www.dentavenue.in/_next/image?url=%2Fimages%2Fdr%2Fdr12.jpg&w=1920&q=75",
                                    "@id": "",
                                    url: "https://www.dentavenue.in/",
                                    telephone: "79000 74487",
                                    priceRange: "$",
                                    address: {
                                        "@type": "PostalAddress",
                                        streetAddress:
                                            "302, Third Floor, Abhishek Complex, Opposite to BMC M WEST WARD OFFICE, 1st Road, Chembur",
                                        addressLocality: "Mumbai",
                                        postalCode: "400071",
                                        addressCountry: "IN",
                                    },
                                    geo: {
                                        "@type": "GeoCoordinates",
                                        latitude: 19.0607957,
                                        longitude: 72.8997529,
                                    },
                                    openingHoursSpecification: [
                                        {
                                            "@type": "OpeningHoursSpecification",
                                            dayOfWeek: [
                                                "Tuesday",
                                                "Monday",
                                                "Wednesday",
                                                "Thursday",
                                                "Friday",
                                                "Saturday",
                                            ],
                                            opens: "10:00",
                                            closes: "21:00",
                                        },
                                        {
                                            "@type": "OpeningHoursSpecification",
                                            dayOfWeek: "Sunday",
                                            opens: "10:00",
                                            closes: "16:00",
                                        },
                                    ],
                                    sameAs: [
                                        "https://www.practo.com/mumbai/doctor/akshay-bandewar-dentist-2",
                                        "https://www.bajajfinservhealth.in/doctor/mumbai/dentist/dr-akshay-bandewar",
                                        "https://www.lybrate.com/navi-mumbai/doctor/dr-akshay-bandewar-dentist",
                                        "https://www.clinicspots.com/clinic/dr-akshays-dentavenue",
                                        "https://www.dentavenue.in/",
                                    ],
                                }),
                            }}
                        />

                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "Dentist",
                                    name: "Dr. Saudnya Rudrawar",
                                    image:
                                        "https://www.dentavenue.in/_next/image?url=%2Fimages%2Fdr%2Fdr11.jpg&w=1920&q=97",
                                    "@id": "",
                                    url: "https://www.dentavenue.in/",
                                    telephone: "79000 74487",
                                    priceRange: "$",
                                    address: {
                                        "@type": "PostalAddress",
                                        streetAddress:
                                            "302, Third Floor, Abhishek Complex, Opposite to BMC M WEST WARD OFFICE, 1st Road, Chembur",
                                        addressLocality: "Mumbai",
                                        postalCode: "400071",
                                        addressCountry: "IN",
                                    },
                                    geo: {
                                        "@type": "GeoCoordinates",
                                        latitude: 19.0607957,
                                        longitude: 72.8997529,
                                    },
                                    openingHoursSpecification: [
                                        {
                                            "@type": "OpeningHoursSpecification",
                                            dayOfWeek: [
                                                "Tuesday",
                                                "Monday",
                                                "Wednesday",
                                                "Friday",
                                                "Thursday",
                                                "Saturday",
                                            ],
                                            opens: "10:00",
                                            closes: "21:00",
                                        },
                                        {
                                            "@type": "OpeningHoursSpecification",
                                            dayOfWeek: "Sunday",
                                            opens: "10:00",
                                            closes: "16:00",
                                        },
                                    ],
                                    sameAs: [
                                        "https://www.practo.com/mumbai/doctor/saudnya-rudrawar-dentist",
                                        "https://www.lybrate.com/mumbai/doctor/dr-saudnya-bandewar-dentist",
                                        "https://www.clinicspots.com/doctor/saudnya-rudrawar",
                                        "https://www.linkedin.com/in/dr-saudnya-rudrawar-380b4421/",
                                    ],
                                }),
                            }}
                        />
                    </>} */}
            </Head>
            <MUIProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
            </MUIProvider>
        </CacheProvider>
    );
}
