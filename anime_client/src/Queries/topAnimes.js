
import { gql } from '@apollo/client';

export const GET_TOP_ANIMES = gql`
  query {
    Page(page: 1, perPage: 12) {
      media(sort: POPULARITY_DESC, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          large
        }
        episodes
        genres
        averageScore
        popularity
      }
    }
  }
`;
