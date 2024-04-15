import gql from "graphql-tag";

export const OwnerSchema = gql`
  type Owner {
    id: ID!
    name: String!
    email: String!
    address: String!
    phone: String!
  }

  type Query {
    getOwner: String!
  }
`;
