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
