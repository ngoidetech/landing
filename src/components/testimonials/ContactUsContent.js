import React, { useState } from "react";
import tw from "twin.macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import Group from "images/ContactUsPhoto.png";

import "slick-carousel/slick/slick.css";

const PrimaryBackgroundContainer = tw(Container)`h-screen bg-white`;
const CcontentWithPaddingXl = tw(ContentWithPaddingXl)`py-32`;

const HeadingContainer = tw.div`text-center`;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw.div`text-center`;
const Description = tw(SectionDescription)`mx-auto text-center text-black`;
const PrimaryActionBtn = tw.a`rounded-full px-8 py-3 mt-8 mr-auto lg:mr-4 text-sm sm:text-base sm:mt-8 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default ({
  subheading = "",
  heading = "Testimonials",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  return (
    <PrimaryBackgroundContainer>
      <CcontentWithPaddingXl>
        <HeadingContainer>
          <Heading style={{ textAlign: "-webkit-center" }}>
            <img src={Group} style={{ height: "15rem" }} />
          </Heading>
          <Description>
            You need a website, mobile apps, or something about tech? just
            contact us.
          </Description>
          <PrimaryActionBtn
            style={{
              width: "15rem",
              background: "black",
              color: "white",
            }}
            href="mailto:ngoidetech@gmail.com"
          >
            Email
          </PrimaryActionBtn>
          <PrimaryActionBtn
            style={{
              width: "15rem",
              background: "black",
              color: "white",
            }}
            href="https://api.whatsapp.com/send?phone=6281398019412&text=Nugraha%20Anjing"
          >
            Whatsapp
          </PrimaryActionBtn>
        </HeadingContainer>
      </CcontentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
