import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/DashedBorderSixFeatures";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <FeatureStats/>
    <Features />
    <Footer />
  </AnimationRevealPage>
);
