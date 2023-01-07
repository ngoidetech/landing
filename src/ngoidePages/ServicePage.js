import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContentService.js";
import Features from "components/features/DashedBorderSixFeatures";
import Footer from "components/footers/FiveColumnDark.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Header from "components/blogs/HeaderService.js";
import ServiceImg from "images/ServiceImg.png";
import ServiceImg1 from "images/ServiceImg1.png";
import ServiceImg2 from "images/ServiceImg2.png";

import tw from "twin.macro";
const Heading = tw.div`mt-4 font-black text-black text-left text-2xl sm:text-3xl lg:text-4xl text-center md:text-left leading-tight`;


export default () => (
  <AnimationRevealPage>
    {/* <Hero /> */}
    <Header />
    <Features />
    <Heading>3 reasons you should work with us</Heading>
    <MainFeature
      heading="1. Make your business easy to reach"
      description="Based on Digital 2020, it was revealed that internet users worldwide 
      have reached 4.5 billion people. This figure shows that internet users 
      have reached more than 60 percent of the world's population 
      or more than half of the earth's population.
      
      Source : teknoia.com"
      imageSrc={ServiceImg}
      buttonRounded={false}
      primaryButtonUrl="/our-team"
    />
    <MainFeature
      heading="2. make your business from off to on"
      description="When pandemi, all offline business was shutdown
      and the online still on the line
      And you need us to make your “off” still “on”"
      imageSrc={ServiceImg1}
      buttonRounded={false}
      textOnLeft={false}
      primaryButtonUrl="/our-team"
    />
    <MainFeature
      heading="3. We solve your It problem"
      description="You need a website, mobile apps, or something about tech?
      Just contact us."
      imageSrc={ServiceImg2}
      buttonRounded={false}
      primaryButtonUrl="/our-team"
    />
    <Footer />
  </AnimationRevealPage>
);
