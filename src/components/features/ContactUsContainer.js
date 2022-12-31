import React from "react";
import tw from "twin.macro";
import Group from "images/Group1.png";

const Container = tw.div`h-screen`;

export default () => {
  return (
    <Container>
      <img
        src={Group}
        style={{
          height: "12rem",
        }}
      />
    </Container>
  );
};
