import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

// styles
import { Wrapper, Content } from "./BreadCrumbStyles";

const BreadCrumb = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
};

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string,
};
export default BreadCrumb;
