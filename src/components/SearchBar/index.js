import React, { useEffect, useRef, useState } from "react";
import propTypes from "prop-types";
// Styles
import { Content, Wrapper } from "./SearchBar.styles";

// images
import searchIcon from "../../images/search-icon.svg";

const SearchBar = ({ setSearhTerm, searchTerm }) => {
  const initial = useRef(true);
  const [state, setState] = useState("");

  useEffect(() => {
    if (initial.current) return (initial.current = false);

    const timer = setTimeout(() => {
      setSearhTerm(state);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setSearhTerm, state]);

  useEffect(() => {
    setState(searchTerm);
  }, [setState, searchTerm]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          value={state}
          onChange={(e) => setState(e.currentTarget.value)}
        />
      </Content>
    </Wrapper>
  );
};
SearchBar.propTypes = {
  setSearhTerm: propTypes.func,
  searchTerm: propTypes.string,
};
export default SearchBar;
