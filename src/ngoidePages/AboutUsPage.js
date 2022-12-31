import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContentAbout.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import Group from "images/Group1.png";
import Footer from "components/footers/FiveColumnDark.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature1
      subheading=""
      heading="Our Story"
      buttonRounded={false}
      description="we are a group of young people who like digital technology, 
              even though we are young, we already have a lot of experience 
              in the field of Information and Technology ranging from website creation, 
              mobile application development, UI/UX, and several times solving difficult problems 
              in the field of Information and Technology"
      primaryButtonText="See Our Team"
      imageSrc={Group}
    />
    <Footer />
  </AnimationRevealPage>
);
