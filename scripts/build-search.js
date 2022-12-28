// import { Path } from '../utils/apiService';
// import { token } from '../utils/config';
// build-search.js
const dotenv = require('dotenv');
const algoliasearch = require('algoliasearch/lite');

async function getAllBlogPosts() {
  // write your code to fetch your data
  const response = await fetch('https://coolstop.digitalsalt.in/api/products', {
    headers: {
      Authorization: `Bearer 2e62949e3ac4a2bf53b1ff8f9f0e6af8f3d8387e11dfab6f66150f0c73af8ab901d4bf24c6c226fab9555cc7d2e6ba9b6d8b47d92c02dbf43d1e23c748f957120981c93ce4c90209d40a8065c7503b670a9ab9bddcb48f51eeb9d023cf73e4f3c2821d93a5240ef6e878200e24f3dfeec28c14d66a84093a5e408cf535e605d8`,
    },
  });
  const data = await response.json();
  return data.data.attributes.products.data;
}

function transformPostsToSearchObjects(products) {
  const transformed = products?.map((product) => {
    return {
      objectID: product.id,
      name: product.attributes.name,
      slug: product.attributes.slug,
      modelNo: product.attributes.modelNo,
    };
  });

  return transformed;
}

(async function () {
  dotenv.config();

  try {
    const posts = await getAllBlogPosts();
    const transformed = await transformPostsToSearchObjects(posts);

    // initialize the client with your environment variables
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY
    );

    // initialize the index with your index name
    const index = client.initIndex('cool-stop');

    // save the objects!
    const algoliaResponse = await index.saveObjects(transformed);

    // check the output of the response in the console
  } catch (error) {}
})();
