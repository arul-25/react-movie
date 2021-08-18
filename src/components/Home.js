import React from "react";
import { useHomeFetch } from "../hooks/useHomeFecth";

// Components
import HeroImage from "./HeroImage";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";

// IMAGE
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import NoImage from "../images/no_image.jpg";
import Button from "./Button";

const Home = () => {
  const { state, setSearchTerm, searchTerm, loading, setIsLoadingMore } =
    useHomeFetch();

  return (
    <>
      {state?.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearhTerm={setSearchTerm} searchTerm={searchTerm} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state?.results.map((movie, index) => (
          <Thumb
            key={index}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state?.page < state?.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
