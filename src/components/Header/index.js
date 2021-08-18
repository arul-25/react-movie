import React from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { search } from "../../hooks/useHomeFecth";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  const setSearchTerm = useSetRecoilState(search);
  const handleClick = () => {
    setSearchTerm("");
    sessionStorage.removeItem("homeState");
  };
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" onClick={handleClick} />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb_logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
