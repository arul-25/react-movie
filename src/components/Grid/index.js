import React from "react";
import propTypes from "prop-types";

// styles
import { Content, Wrapper } from "./Grid.styles";

const Grid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);
Grid.propTypes = {
  header: propTypes.string,
};
export default Grid;
