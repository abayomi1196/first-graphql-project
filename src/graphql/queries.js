import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query allCharacterNames {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_SINGLE_CHARACTER = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      type
      origin {
        name
        type
      }
      location {
        name
        type
      }
    }
  }
`;
