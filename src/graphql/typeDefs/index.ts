import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    verbs: [ArrVerb]
  }
  type ArrVerb {
    id: ID
    name: String
    definition: String
  }
`;
