import "@/styles/globals.css";

import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";

import Layout from "./components/layout";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const variants = {
    hidden: { opacity: 0, y: 200, x: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -100, y: 0 },
  };
  return (
    <ThemeProvider attribute="class">
      <AnimatePresence>
        <motion.div
          key={router.route}
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }} // Set the transition to linear
        >
          {/* <Layout> */}
            <Component {...pageProps} />
          {/* </Layout> */}
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
