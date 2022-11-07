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
import BgHome from "images/bg-home.png";
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

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("${BgHome}");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col`;

const Heading = styled.h1`
  ${tw`text-3xl mb-5 sm:text-4xl lg:text-5xl xl:text-4xl font-black text-gray-100 leading-snug mt-16 sm:mt-16`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.div`flex text-xl mt-5 sm:text-base sm:mt-8 font-bold transition duration-300 text-gray-100 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;
const PrimaryActionBtn = tw.button`rounded-full px-8 py-3 mt-8 text-sm sm:text-base sm:mt-8 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1} style={{
      border: "solid white",
      borderRadius: "20px",
      width: "60rem",
      textAlign: 'center'
    }}>
      <NavLink href="#">ABOUT US</NavLink>
      <NavLink href="#">SERVICE</NavLink>
      <NavLink href="#">CONTACT US</NavLink>
      <NavLink href="#">OUT TEAM</NavLink>
    </NavLinks>,
    // <NavLinks key={2}>
    //   <PrimaryLink href="/#">Hire Us</PrimaryLink>
    // </NavLinks>,
  ];

  return (
    <Container>
      {/* <OpacityOverlay /> */}
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>Problem? Solve with Us</Heading>
          <PrimaryAction><img src={IconVerif} style={{marginRight:'1rem'}}/> Web Development</PrimaryAction>
          <PrimaryAction><img src={IconVerif} style={{marginRight:'1rem'}}/>Mobile Development</PrimaryAction>
          <PrimaryAction><img src={IconVerif} style={{marginRight:'1rem'}}/>UI/UX Design</PrimaryAction>
          <PrimaryAction><img src={IconVerif} style={{marginRight:'1rem'}}/>IT Consultant</PrimaryAction>
          <PrimaryActionBtn style={{width:'15rem', background:'white', color:'black'}}>Find More</PrimaryActionBtn>
        </Content>
      </HeroContainer>
    </Container>
  );
};
