import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import aan from "images/team/aan.png";
import ricky from "images/team/ricky.png";
import ical from "images/team/ical.png";
import nugi from "images/team/nugi.png";
import yohanes from "images/team/yohanes.png";
import akbar from "images/team/akbar.png";
import yasir from "images/team/yasir.png";
import ripo from "images/team/ripo.png";
import pai from "images/team/pai.png";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto pb-20 lg:pb-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-full w-20 h-20 place-self-center`,
]);
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20`;
const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block mt-4 text-sm font-semibold bg-white text-black`}
`;

const Details = tw.div`p-8 rounded-2xl flex-1 flex flex-col items-center text-center lg:block lg:text-center bg-black`;
const MetaContainer = tw.div`flex items-center justify-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-xl text-white`;
const NameAuthor = tw.h5`mt-4 leading-snug font-bold text-lg text-white`;

export default ({}) => {
  const blogPosts = [
    {
      imageSrc: ricky,
      author: "Ricky Andika",
      title: "Full Stack Web Developer",
      href: "#",
    },
    {
      imageSrc: nugi,
      author: "Nugraha Ardinata Pratama",
      title: "UI/UX Designer & Data Analyst",
      href: "www.linkedin.com/in/nugrahaardinatapratama",
    },
    {
      imageSrc: ical,
      author: "Shalahuddin Ahmad Aziz",
      title: "Web / App / Backend Dev",
      href: "https://ical852.github.io/",
    },
    {
      imageSrc: akbar,
      author: "Akbar Anung",
      title: "Front End Developer",
      href: "#",
    },
    {
      imageSrc: ripo,
      author: "Rivo Yajnatantra Izzulhac",
      title: "Data Engineer/Analyst",
      href: "#",
    },
    {
      imageSrc: yasir,
      author: "M Yasir Khoiri",
      title: "Front End Web Developer",
      href: "#",
    },
    {
      imageSrc: pai,
      author: "Ahmad Rifai",
      title: "Quality Assurance/Tester",
      href: "#",
    },
    {
      imageSrc: aan,
      author: "M Farhan Fadillah",
      title: "Social Media Specialist",
      href: "#",
    },
    {
      imageSrc: yohanes,
      author: "Yohannes Mikael",
      title: "Mobile Developer",
      href: "#",
    },
  ];
  return (
    <Container>
      <Content>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image
                  imageSrc={post.imageSrc}
                  style={{
                    position: "absolute",
                    marginTop: "-3rem",
                    backgroundPositionX: "center",
                    backgroundSize: "cover",
                  }}
                />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <NameAuthor>{post.author}</NameAuthor>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Link href={post.href} target="_blank">Portofolio</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
