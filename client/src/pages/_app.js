import "@/styles/globals.css";

import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "./components/layout";

// function Loading() {
// const router= useRouter()
// const[loading,setLoading] = useState(false)
//  useEffect(()=>{
//   const handleStart=(url) => (url !== router.asPath) &&(setLoading(true))
//   const handleComplate=(url) => (url === router.asPath) && setTimeout(() => {setLoading(false)
//   },5000)
//   router.events.on('routerChangeStart', handleStart)
//   router.events.on('routerChangeComplate', handleComplate)
//   router.events.on('routerChangeError', handleComplate)
//   return () => {
//     router.events.off('routerChangeStart', handleStart)
//     router.events.off('routerChangeComplate', handleComplate)
//     router.events.off('routerChangeError', handleComplate)
//   }

//  })

//  return loading && (
//   <div>
//     <p>loading...</p>
//   </div>
//  )
// }

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const variants = {
    hidden: { opacity: 0, y: 200, x: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -100, y: 0 },
  };
  return (
    <ThemeProvider  attribute="class" >
      <Layout>
        <AnimatePresence>
          <motion.div
            key={router.route}
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: "linear" }} // Set the transition to linear
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}
