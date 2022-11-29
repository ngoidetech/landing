import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";
import IconVerif from "images/ic_round-verified-black.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/2 px-6 flex place-content-center`}
`;

const ColumnRightBorder = styled.div`
  ${tw`md:w-1/2 lg:w-1/2 px-6 flex place-content-center md:border-r-4 md:border-black`}
`;

const Card = styled.div`
  ${tw`flex flex-col max-w-xs items-center my-12`}
  .imageContainer {
    ${tw`border-2 border-black text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`text-left`}
  }

  .title {
    ${tw`flex mt-2 font-bold text-xl leading-none text-black items-center`}
  }

  .description {
    ${tw`mt-3 font-semibold text-black text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;
const PrimaryActionBtn = tw.button`rounded-full px-8 py-3 mt-8 text-sm sm:text-base sm:mt-8 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Web Development",
      description:
        "We are experienced in website development ranging from personal and business needs",
      border: true,
    },
    {
      imageSrc: SupportIconImage,
      title: "IT Consultant",
      description: "Have a IT problem? dont worry let us help you.",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Mobile Development",
      description:
        "We are experienced in mobile development for your business needs",
      border: true,
    },
    {
      imageSrc: ReliableIconImage,
      title: "UI/UX Design",
      description:
        "We are experienced in website/apps designing ranging from personal and business needs",
    },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        {cards.map((card, i) =>
          card.border == true ? (
            <ColumnRightBorder key={i}>
              <Card>
                <span className="textContainer">
                  <span className="title">
                    <img src={IconVerif} style={{ marginRight: "1rem" }} />{" "}
                    {card.title}
                  </span>
                  <p className="description">{card.description}</p>
                </span>
                <PrimaryActionBtn
                  style={{
                    width: "15rem",
                    background: "black",
                    color: "white",
                    marginRight: "auto",
                  }}
                >
                  See Our Portofolio
                </PrimaryActionBtn>
              </Card>
            </ColumnRightBorder>
          ) : (
            <Column key={i}>
              <Card>
                <span className="textContainer">
                  <span className="title">
                    <img src={IconVerif} style={{ marginRight: "1rem" }} />{" "}
                    {card.title}
                  </span>
                  <p className="description">{card.description}</p>
                </span>
                <PrimaryActionBtn
                  style={{
                    width: "15rem",
                    background: "black",
                    color: "white",
                    marginRight: "auto",
                  }}
                >
                  See Our Portofolio
                </PrimaryActionBtn>
              </Card>
            </Column>
          )
        )}
      </ThreeColumnContainer>
      {/* <DecoratorBlob /> */}
    </Container>
  );
};
