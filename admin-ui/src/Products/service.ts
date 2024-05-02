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

const splitToPipeDelimited = async (text: string) => {
  const words = text.split(" ");
  return words.join("|");
};

export const getSearchByString = async (
  client: ApolloClient<object>,
  searchStringParam: string
): Promise<string[]> => {
  const searchString = await splitToPipeDelimited(searchStringParam);
  const result = await client.query({
    query: searchStringQuery,
    variables: { searchString },
  });
  return result.data.searchProducts.edges.map((value: any) => value.node);
};

export type ProductResultType = {
  rowId: string;
};
type QueryResponse = {
  data: {
    query: {
      products: {
        edges: [{ node: ProductResultType }];
      };
    };
  };
};
