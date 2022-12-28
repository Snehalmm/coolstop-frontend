// ./components/Search/index.js

// “algoliasearch/lite” is the search-only version of the API client — optimized for size and search
import algoliasearch from 'algoliasearch/lite';
import CustomSearchBox from './CustomSearchBox';
import CustomHits from './CustomHits';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

export default function Search() {
  // const [searchInput, setSearchInput] = useState(null);
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="cool-stop">
        {/* searchClient={searchClient} indexName="cool-stop" */}
        <CustomSearchBox />
        <CustomHits />
      </InstantSearch>
    </>
  );
}
