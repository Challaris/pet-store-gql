import gql from "graphql-tag";

export const OwnerSchema = gql`
  type Owner {
    name: String!
    email: String!
    address: String!
    phone: String!
  }

  type Query {
    getOwner: String!
  }
`;
