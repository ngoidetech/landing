import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import service_left from "images/service_left.png";
import service_right from "images/service_right.png";
import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/lightBlack.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-black hover:border-black hover:text-black`}
  }
  ${NavToggle}.closed {
    ${tw`text-black hover:text-black`}
  }
`;

const Posts = tw.div`mb-6 flex flex-wrap -mr-3 relative`;
const Post = tw.div`flex flex-col h-full bg-gray-200 rounded`;
const PostImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 sm:h-80 bg-center bg-cover rounded-t`}
`;

export const Container = tw.div`relative -mt-8`;
export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto`;

export default ({}) => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/about-us">ABOUT US</NavLink>
      <NavLink href="/service">SERVICE</NavLink>
      <NavLink href="/contact-us">CONTACT US</NavLink>
      <NavLink href="/our-team">OUR TEAM</NavLink>
    </NavLinks>,
  ];
  return (
    <Container>
      <StyledHeader links={navLinks} />
    </Container>
  );
};
