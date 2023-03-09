import Head from "next/head";
import BlogSection from "./components/blogSection";
import CustomThemeSection from "./components/customThemeSection";
import FeatureSection from "./featureSection";
import HeroSection from "./heroSection";
import FavoriteProductSection from "./favoriteProductSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <HeroSection />
      <FeatureSection />
      <FavoriteProductSection />
      <CustomThemeSection />
      <BlogSection />
    </div>
  );
}
