import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContentService.js";
import Features from "components/features/DashedBorderSixFeatures";
import Footer from "components/footers/FiveColumnDark.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Header from "components/blogs/HeaderOurTeam.js";
import ServiceImg from "images/ServiceImg.png";
import ServiceImg1 from "images/ServiceImg1.png";
import ServiceImg2 from "images/ServiceImg2.png";

import tw from "twin.macro";
import OurTeamCard from "components/blogs/OurTeamCard";
const Heading = tw.div`mt-4 font-black text-black text-left text-2xl sm:text-3xl lg:text-4xl text-center md:text-left leading-tight`;

export default () => (
  <AnimationRevealPage>
    {/* <Hero /> */}
    <Header />
    <OurTeamCard />
    <Footer />
  </AnimationRevealPage>
);
