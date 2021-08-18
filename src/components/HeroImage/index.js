import React from "react";
import { Wrapper, Content, Text } from "./HeroImage.styles";
import propTypes from "prop-types";

const HeroImage = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

HeroImage.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  text: propTypes.string,
};

export default HeroImage;
