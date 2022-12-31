import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

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
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      author: "Ricky Andika",
      title: "Full Stack Web Developer",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1479660095429-2cf4e1360472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      author: "Shalahuddin Ahmad Aziz",
      title: "Web / App / Backend Dev",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      author: "Nugraha Ardinata Pratama",
      title: "UI/UX Designer & Data Analyst",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      author: "Akbar Anung",
      title: "Front End Developer",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1479660095429-2cf4e1360472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      author: "Rivo Yajnatantra Izzulhac",
      title: "Data Engineer/Analyst",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      author: "M Yasir Khoiri",
      title: "Front End Web Developer",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      author: "Ahmad Rifai",
      title: "Quality Assurance/Tester",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1479660095429-2cf4e1360472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      author: "M Farhan Fadillah",
      title: "Social Media Specialist",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      author: "Yohannes Mikael",
      title: "Mobile Developer",
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
                  }}
                />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <NameAuthor>{post.author}</NameAuthor>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Link href="#">Portofolio</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
