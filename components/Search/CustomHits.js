// ./components/Search/CustomHits.js
import { connectStateResults } from "react-instantsearch-dom";
import Link from "next/link";

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>Aw snap! No search results were found.</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <ul className="searchbox-wrap">
          {searchResults.hits.map((hit) => (
            <li key={hit.objectID}>
              {" "}
              <Link href={`/products/${hit.slug}`}>{hit.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default connectStateResults(Hits);
