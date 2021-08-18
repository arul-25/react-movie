import React from "react";
import propTypes from "prop-types";
// Styles
import { Content, Wrapper } from "./SearchBar.styles";

// images
import searchIcon from "../../images/search-icon.svg";

const SearchBar = ({ setSearhTerm, searchTerm }) => {
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input type="text" placeholder="Search Movie" />
      </Content>
    </Wrapper>
  );
};
SearchBar.propTypes = {
  setSearhTerm: propTypes.func,
  searchTerm: propTypes.string,
};
export default SearchBar;
