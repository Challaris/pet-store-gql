import gql from "graphql-tag";

export const PetSchema = gql`
  type Pet {
    id: ID!
    name: String!
    species: String!
    color: String!
    breed: String
    sheltered: Boolean!
    owner: Owner
  }

  type GetAllPetsResponse {
    status: Boolean
    message: String
    data: [Pet]
  }

  type GetSinglePetResponse {
    status: Boolean!
    message: String!
    data: Pet
  }

  type CreatePetResponse {
    status: Boolean!
    message: String!
  }

  type UpdatePetDataResponse {
    status: Boolean!
    message: String!
    data: Pet
  }

  type DeletePetDataResponse {
    status: Boolean!
    message: String!
  }

  input PetOwner {
    name: String
    email: String
    address: String
    phone: String
  }

  type Query {
    getAllPets: GetAllPetsResponse!
    getSinglePet(id: ID!): GetSinglePetResponse!
  }

  type Mutation {
    createPet(
      name: String!
      species: String!
      breed: String
      sheltered: Boolean!
      color: String!
      owner: PetOwner!
    ): CreatePetResponse!
    updatePetData(
      id: ID!
      name: String!
      species: String!
      color: String!
      breed: String
      sheltered: Boolean!
      owner: PetOwner!
    ): UpdatePetDataResponse!
    deletePetData(id: ID!): DeletePetDataResponse!
  }
`;
