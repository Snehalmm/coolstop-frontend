// ./components/Search/index.js
import React, { useState } from 'react';
// “algoliasearch/lite” is the search-only version of the API client — optimized for size and search
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import CustomSearchBox from './CustomSearchBox';
import CustomHits from './CustomHits';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

export default function Search() {
  //   const [query, setQuery] = useState('');
  //   const submitSearchHandler = (e) => {
  //     e.preventDefault();
  //     router.push(`/products?search=${query}`);
  // if (query?.length > 3) {
  // const response = await fetch(
  //   `http://localhost:3000/api/products?=${value}`
  // );
  // const data = await response.json();
  // console.log(response);
  // }
  //   };

  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="cool-stop">
        <CustomSearchBox />
        <CustomHits />
      </InstantSearch>
    </>
  );
}
