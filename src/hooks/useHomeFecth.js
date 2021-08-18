import { useState, useEffect } from "react";
import { atom, useRecoilState } from "recoil";

// API
import API from "../API";

const initalState = {
  page: 0,
  results: [],
  total_page: 0,
  total_results: 0,
};

export const search = atom({
  key: "search-key",
  default: "",
});

export const useHomeFetch = () => {
  const [state, setState] = useState();
  const [searchTerm, setSearchTerm] = useRecoilState(search);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      // console.log(movies);

      setState((prev) => {
        return {
          ...movies,
          results:
            page > 1
              ? [...prev.results, ...movies.results]
              : [...movies.results],
        };
      });
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial and Search
  useEffect(() => {
    setState(initalState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);

    setIsLoadingMore(false);
  }, [searchTerm, isLoadingMore, state?.page]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
