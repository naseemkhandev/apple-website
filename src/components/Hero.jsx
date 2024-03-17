import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 760);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 760);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#title", { opacity: 1, delay: 1.5 });

    gsap.to("#buy-btn", { opacity: 1, translateY: 0, delay: 1.5 });
  }, []);

  return (
    <section className="min-h-screen py-10 w-full bg-black relative">
      <div className="h-full flex flex-col items-center justify-center">
        <p id="title" className="hero-title">
          iPhone 15 Pro
        </p>

        <div className="w-2/3 md:w-10/12">
          <video
            autoPlay
            muted
            playsInline="true"
            className="pointer-events-none"
            key={isLargeScreen}
          >
            <source
              src={isLargeScreen ? heroVideo : smallHeroVideo}
              type="video/mp4"
            />
          </video>
        </div>

        <div
          id="buy-btn"
          className="flex flex-col items-center justify-center gap-1 opacity-0 translate-y-20"
        >
          <button className="btn">Buy</button>

          <p className="md:text-lg font-semibold">
            From $999 or $41.62/mo. for 24 mo.<sup>1</sup>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
