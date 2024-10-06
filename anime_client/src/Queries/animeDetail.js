
import { gql } from '@apollo/client';

export const GET_ANIME_DETAILS = gql`
  query GetAnimeDetails($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
      coverImage {
        large
      }
      bannerImage
      description
      episodes
      genres
      averageScore
      popularity
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      duration
      status
      studios {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

