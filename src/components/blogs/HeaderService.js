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

const PostContainer = styled.div`
  ${tw`relative z-20 mt-10 sm:pt-3 pr-3 w-full sm:w-1/2 lg:w-1/3 max-w-sm mx-auto sm:max-w-none sm:mx-0`}

  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full sm:w-full lg:w-2/3`}
      ${Post} {
        ${tw`sm:flex-row items-center sm:pr-3`}
      }
      ${PostImage} {
        ${tw`sm:h-full sm:min-h-full w-full sm:w-full rounded-t sm:rounded-t-none sm:rounded-l`}
      }
    `}
`;
const Heading = styled.h1`
  ${tw`text-3xl sm:text-4xl lg:text-5xl xl:text-4xl font-black text-gray-100 text-center mt-32`}
  span {
    ${tw`inline-block`}
  }
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
      <ContentWithPaddingXl>
        <Posts>
          <PostContainer featured={false}>
            <Post className="group">
              <PostImage imageSrc={service_left} style={{
                backgroundSize: '120%'
              }}>
                <Heading>Our</Heading>
              </PostImage>
            </Post>
          </PostContainer>
          <PostContainer featured={true}>
            <Post className="group">
              <PostImage imageSrc={service_right} style={{
                backgroundSize: '120%'
              }}>
                <Heading>Service</Heading>
              </PostImage>
            </Post>
          </PostContainer>
        </Posts>
      </ContentWithPaddingXl>
    </Container>
  );
};
