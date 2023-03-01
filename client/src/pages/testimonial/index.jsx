import Head from "next/head";
import React, { useRef } from "react";
import TestimonialCard from "../components/testimonialCard";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Testimonial = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      containerRef={containerRef}
      options={{ smooth: true }}
    >
      <main
        className="w-full relative px-12 flex justify-center bg-[#EEF0F4] text-black"
        ref={containerRef}
        data-scroll-container
      >
        <Head>Testimonial</Head>
        <div className="relative z-10 flex pt-[5vh] pb-[15vh] mx-6">
          <TestimonialCard num={1} />
        </div>
        <div
          className="relative z-10 flex pt-[5vh] pb-[15vh] mx-6"
          data-scroll-section
        >
          <TestimonialCard num={2} />
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
};

export default Testimonial;
