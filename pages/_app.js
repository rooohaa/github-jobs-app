import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <link
               href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
               rel="stylesheet"
            />
            <link
               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
               rel="stylesheet"
            />
            <title>Github Jobs</title>
         </Head>
         <Component {...pageProps} />
      </>
   )
}

export default MyApp
