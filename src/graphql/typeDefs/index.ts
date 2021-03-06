import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    verbs: [ArrVerb]
    verb(id: ID!): ArrVerb
  }

  type Mutation {
    createVerb(name: String!, definition: String!): ArrVerb
  }

  type ArrVerb {
    id: ID
    name: String
    definition: String
  }
`;
