import { connectSearchBox } from "react-instantsearch-dom";
import { useState } from "react";

function SearchBox({ refine, setShowHits, resultsRef }) {
  const [searchInput, setSearchInput] = useState([]);

  return (
    <form>
      <input
        placeholder="Search Products"
        onChange={(e) => {
          setSearchInput(e.currentTarget.value), refine(e.currentTarget.value);
          setShowHits(true);
        }}
        autoComplete="off"
        ref={resultsRef}
        // value={query}
        type="search"
        name="search"
      />
      {searchInput.length === 0 && (
        <button type="submit">
          <svg width="30" height="30" x="0" y="0" viewBox="0 0 100 100">
            <path d="M44,69a24.87,24.87,0,0,0,15.42-5.34L76,80.24,80.24,76,63.66,59.42A25,25,0,1,0,44,69Zm0-44A19,19,0,1,1,25,44,19,19,0,0,1,44,25Z" />
          </svg>
        </button>
      )}
    </form>
  );
}

export default connectSearchBox(SearchBox);
