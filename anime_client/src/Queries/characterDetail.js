import { gql } from "@apollo/client";

export const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($name: String) {
    Character(search: $name) {
      id
      name {
        full
      }
      image {
        large
      }
      description
      age
      gender
      dateOfBirth {
        year
        month
        day
      }
      bloodType
      siteUrl
      media {
        edges {
          node {
            id
            title {
              romaji
              english
              native
            }
            coverImage {
              large
            }
          }
        }
      }
    }
  }
`;
