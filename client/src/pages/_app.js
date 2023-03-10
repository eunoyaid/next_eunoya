import "@/styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import CustomCursor from 'custom-cursor-react';
import "custom-cursor-react/dist/index.css";

import Layout from "./components/layout";
import { SessionProvider } from "next-auth/react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
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
          <SessionProvider session={session}>
            <Layout>
              <CustomCursor
                targets={[".link", ".button"]}
                customClass="cursor-circle"
                dimensions={40}
                fill="#000"
                strokeColor=""
                strokeWidth={0}
                targetOpacity={.3}
                targetScale={4}
                smoothness={{
                  movement: 0.2,
                  scale: 0.3,
                  opacity: 0.8,
                }}
              />
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
