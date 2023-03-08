// import Head from "next/head";
// import BlogSection from "./components/blogSection";
// import CustomThemeSection from "./components/customThemeSection";
// import FeatureSection from "./featureSection";
// import HeroSection from "./heroSection";
// import FavoriteProductSection from "./favoriteProductSection";

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Home Page</title>
//       </Head>
//       <HeroSection />
//       <FeatureSection />
//       <FavoriteProductSection />
//       <CustomThemeSection />
//       <BlogSection />
//     </div>
//   );
// }

import { getSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const IndexPage = ({ session }) => {
  const signInButtonNode = () => {
    if (session) {
      return false;
    }

    return (
      <div>
        <Link href="/api/auth/signin">
          <button
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign In WITH GOOGLE
          </button>
        </Link>
      </div>
    );
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (
      <div>
        <Link href="/api/auth/signout">
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </button>
        </Link>
      </div>
    );
  };

  if (!session) {
    return (
      <div className="hero">
        <div className="navbar">
          {signOutButtonNode()}
          {signInButtonNode()}
        </div>
        <div className="text">You aren't authorized to view this page</div>
      </div>
    );
  }

  return (
    <div className="hero">
      <Head>
        <title>Index Page</title>
      </Head>
      <div className="navbar">
        {signOutButtonNode()}
        {signInButtonNode()}
      </div>
      <div className="text">Hello world</div>
    </div>
  );
};

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return {
    props: {
      session,
    },
  };
};

export default IndexPage;
