import React from 'react'
import theme from '../config/theme'
import { createEmotionCache } from '../utils'
import createEmotionServer from '@emotion/server/create-instance'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <script
            type="text/javascript"
            async
            dangerouslySetInnerHTML={{
              __html: `
              (function(w, d, s, l, i) {
                    w[l] = w[l] || []
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                    const f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != "dataLayer" ? "&l=" + l : ""
                    j.async = true
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
                    f.parentNode.insertBefore(j, f)
                  })(window,document,'script','dataLayer',"GTM-W3MMK948")`,
            }}
          /> */}

          <script
            type="text/javascript"
            async
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N9GFXCQ7')`,
            }}
          />

          <meta charSet="utf-8" />
          <link rel="icon" href="/dentavenue1.ico" />
          <meta name="google-site-verification" content="4GKM3x2UsEDZaIUgwspCYDUJwYNK0YBE80HfNGgJ77U" />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.background.paper} />

          {/* <meta content="#fbfbfb" name="theme-color" />
          <meta content="#fbfbfb" name="msapplication-navbutton-color" />
          <meta content="#fbfbfb" name="apple-mobile-web-app-status-bar-style" />
          <meta content="yes" name="apple-mobile-web-app-capable" /> */}
          {/* <meta name="title" content="Dentist in Chembur | Dental Clinic in Chembur Near Me"></meta>
          <meta name='description' content="Are you in search of a trusted dentist in Chembur East? Your journey ends at Dr. Akshay's DentAvenue Dental Clinic in Chembur. With a team of seasoned professionals, we provide a wide array of dental services, encompassing general dentistry, teeth whitening, dental implants, root canal treatments, and more. Let's embark on the path to a healthy and radiant smile together. Pay a visit to our clinic today!"></meta> */}
          {/* <meta property="og:type" content="website" />
          <meta property="og:title" content="Premier Dental Care in Chembur" />
          <meta property="og:description" content="Experience premier dental care in Chembur for your brightest, healthiest smile." />
          <meta property="og:site_name" content="Dr. Akshay's DentAvenue" />
          <meta property="og:url" content="https://www.dentavenue.in/" />
          <meta property="og:image" content="https://www.dentavenue.in/images/dr-akshays-dentavenue-dental-clinic-chembur-mumbai.webp" /> */}

          {/* <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@DentavenueM" />
          <meta name="twitter:title" content="Dr. Akshay's DentAvenue" />
          <meta name="twitter:description" content="Experience premier dental care in Chembur for your brightest, healthiest smile." />
          <meta name="twitter:image" content="https://www.dentavenue.in/dr-akshays-dentavenue-dental-clinic-chembur-mumbai.webp" /> */}

          {/* <link rel="canonical" href="https://www.dentavenue.in/"></link> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,700;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {this.props.emotionStylesTags}
        </Head>



        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YZSBD74SC9" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
        </Script>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9GFXCQ7"
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe></noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          {/* <noscript>
      
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-W3MMK948`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript> */}

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
// MyDocument.getInitialProps = async (ctx) => {
//   // Resolution order
//   //
//   // On the server:
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. document.getInitialProps
//   // 4. app.render
//   // 5. page.render
//   // 6. document.render
//   //
//   // On the server with error:
//   // 1. document.getInitialProps
//   // 2. app.render
//   // 3. page.render
//   // 4. document.render
//   //
//   // On the client
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. app.render
//   // 4. page.render
//   const originalRenderPage = ctx.renderPage
//   // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
//   // However, be aware that it can have global side effects.
//   const cache = createEmotionCache()
//   const { extractCriticalToChunks } = createEmotionServer(cache)
//   ctx.renderPage = () =>
//     originalRenderPage({
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-ignore
//       enhanceApp: (App) =>
//         function EnhanceApp(props) {
//           // console.log('props ->', props)
//           return <App emotionCache={cache} {...props} />
//         },
//     })
//   const initialProps = await Document.getInitialProps(ctx)
//   // This is important. It prevents emotion to render invalid HTML.
//   // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
//   const emotionStyles = extractCriticalToChunks(initialProps.html)
//   const emotionStyleTags = emotionStyles.styles.map((style) => (
//     <style
//       data-emotion={`${style.key} ${style.ids.join(' ')}`}
//       key={style.key}
//       // eslint-disable-next-line react/no-danger
//       dangerouslySetInnerHTML={{ __html: style.css }}
//     />
//   ))
//   return {
//     ...initialProps,
//     emotionStyleTags,
//   }
// }
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
export default MyDocument
