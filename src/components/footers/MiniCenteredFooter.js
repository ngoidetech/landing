import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
// import logo from "../../images/logo.svg";
import logo from "../../images/ngoide-logo.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

const Container = tw(ContainerBase)`bg-black text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto pb-20 lg:pb-24`;

const Row = tw.div`flex items-center sm:flex-row flex-col px-8`;
const Col = tw.div`flex items-center flex-auto flex-col px-8`;

const LogoContainer = tw.div`flex items-center flex-auto md:justify-end`;
const LogoImg = tw.img`w-4/5`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 flex flex-auto items-start flex-col `;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-1 mx-4`;
const HeaderText = tw.div`border-b-2 border-transparent pb-1 mt-2 mx-4 font-bold text-2xl`;

const SocialLinksContainer = tw.div`mt-8 flex flex-auto flex-col sm:flex-col items-end mb-auto`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4 mt-1`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-white`;
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LinksContainer>
            <HeaderText>Support</HeaderText>
            <Link href="#">About Us</Link>
            <Link href="#">Service</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Our Team</Link>
          </LinksContainer>
          <Col>
            <LogoContainer>
              <LogoImg src={logo} />
            </LogoContainer>
            <CopyrightText>
              &copy; Copyright 2022, NgoideTech. All Rights Reserved.
            </CopyrightText>
          </Col>
          <SocialLinksContainer>
            <HeaderText>Support</HeaderText>
            <SocialLink href="#">(+62) 822 1077 5677</SocialLink>
            <SocialLink href="#">ngoidetech@gmail.com</SocialLink>
          </SocialLinksContainer>
        </Row>
      </Content>
    </Container>
  );
};
