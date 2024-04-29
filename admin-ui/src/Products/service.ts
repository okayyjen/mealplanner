import { ApolloClient, gql } from "@apollo/client";

const searchStringQuery = gql`
query searchStringQuery($searchString: String) {
  searchProducts(search: $searchString) {
    edges {
      node
    }
  }
}

`;

const extractIdsFromResult = (result: QueryResponse) => {
  const extractedProducts: ProductResultType[] = result.data.searchProducts.edges.map((edge) => edge.node);
  return extractedProducts.map((id) => id.node);
};

export const getSearchByString = async (
  client: ApolloClient<object>,
  searchString: string
): Promise<string[]> => {
  // const arrayString = searchString.split(' ');
  // console.log(arrayString);
  const result = await client.query({
    query: searchStringQuery,
    variables: { searchString },
  });
  console.log("result" + result);
  const ids = await extractIdsFromResult(result);
  console.log("ids" + ids);
  return ids;
};

export type ProductResultType = {
  node: string;
};
type QueryResponse = {
  data: {
    searchProducts: {
      edges: [{ node: ProductResultType }];
    };
  };
};
