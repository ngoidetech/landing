import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
import BgHome from "images/bg-about.png";
import IconVerif from "images/ic_round-verified.svg";

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

// relative -mx-8 -mt-8 bg-center bg-cover h-96 min-h-96

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`flex flex-1 flex-col place-content-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl mb-5 sm:text-4xl lg:text-5xl xl:text-4xl font-black text-gray-100 leading-snug`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.div`flex text-xl mt-5 sm:text-base sm:mt-8 font-bold transition duration-300 text-gray-100 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;
const PrimaryActionBtn = tw.button`rounded-full px-8 py-3 mt-8 text-sm sm:text-base sm:mt-8 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/about-us">ABOUT US</NavLink>
      <NavLink href="/service">SERVICE</NavLink>
      <NavLink href="/contact-us">CONTACT US</NavLink>
      <NavLink href="/out-team">OUR TEAM</NavLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>About Us</Heading>
        </Content>
      </HeroContainer>
    </Container>
  );
};
