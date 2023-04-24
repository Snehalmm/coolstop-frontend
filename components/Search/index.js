// ./components/Search/index.js

// “algoliasearch/lite” is the search-only version of the API client — optimized for size and search
import algoliasearch from "algoliasearch/lite";
import CustomSearchBox from "./CustomSearchBox";
import CustomHits from "./CustomHits";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import { InstantSearch } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

export default function Search() {
  // const [searchInput, setSearchInput] = useState(null);
  const [showHits, setShowHits] = useState(true);
  const resultsRef = useRef();

  useEffect(() => {
    // Add event listener to window object to listen for clicks
    window.addEventListener("click", handleOutsideClick);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    // Check if clicked element is outside the results element
    if (resultsRef?.current && !resultsRef?.current?.contains(e.target)) {
      setShowHits(false);
    }
  };
  // const handleBlur = () => {
  //   // setSearchInput([]);
  //   setShowHits(false);
  // };
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="cool-stop">
        {/* searchClient={searchClient} indexName="cool-stop" */}
        <CustomSearchBox setShowHits={setShowHits} resultsRef={resultsRef} />
        {showHits && <CustomHits />}
      </InstantSearch>
    </>
  );
}
