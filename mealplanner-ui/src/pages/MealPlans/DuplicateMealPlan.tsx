import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "relay-runtime";
import environment from "../../relay/environment";

const duplicateMealPlanGQL = graphql`
mutation DuplicateMealPlanMutation($connections: [ID!]!, $mealPlanId: BigInt!, $personId: BigInt) {
    duplicateMealPlan(input: {mealplanId: $mealPlanId, personId: $personId}) {
        mealPlanEdge @prependEdge(connections: $connections) {
            cursor
            node {
              id
              rowId
              nameEn
              nameFr
              personId
              descriptionEn
              descriptionFr
              person {
                fullName
              }
              tags
              mealPlanEntries {
                nodes {
                  meal {
                    id
                    photoUrl
                  }
                }
              }
            }
          }
        }
      }
`;


export const duplicateMealPlan = (connection: string, id:string, p_id?:string) => {
    commitMutation(environment, {
      mutation: duplicateMealPlanGQL,
      variables: {
        connections: [connection],
        mealPlanId: id.toString(),
        personId: p_id?.toString(),
      },
      onCompleted(response, errors) {
        console.log(response);
        console.log(errors);
      
      },
   });
  };

