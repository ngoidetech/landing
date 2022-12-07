import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import BgHome from "images/bg-about.png";
import Group from "images/Group.png";
import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "components/headers/light.js";
import Footer from "components/footers/FiveColumnDark.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import {
  Container as ContainerBase,
  ContentWithPaddingXl,
} from "components/misc/Layouts";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-96 min-h-96`}
  background-image: url("${BgHome}");
`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const Content = tw.div`px-4 flex flex-1 flex-col`;

const Container1 = tw(ContainerBase)`text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/about-us">ABOUT US</NavLink>
      <NavLink href="/service">SERVICE</NavLink>
      <NavLink href="/contact-us">CONTACT US</NavLink>
      <NavLink href="/our-team">OUR TEAM</NavLink>
    </NavLinks>,
    // <NavLinks key={2}>
    //   <PrimaryLink href="/#">Hire Us</PrimaryLink>
    // </NavLinks>,
  ];
  return (
    <Container>
      <HeroContainer>
        <Content>
          <AnimationRevealPage>
            <StyledHeader links={navLinks} />
            <Container1>
              <ContentWithPaddingXl>
                <HeadingContainer>
                  <Heading>About Us</Heading>
                </HeadingContainer>
              </ContentWithPaddingXl>
            </Container1>
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
          </AnimationRevealPage>
          <Footer />
        </Content>
      </HeroContainer>
    </Container>
  );
};
