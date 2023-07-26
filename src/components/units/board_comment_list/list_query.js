import { gql } from "@apollo/client";
export const FETCH_COMMENT_LIST = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: 1, boardId: $boardId) {
      _id
      writer
      contents
      rating
      createAt
    }
  }
`;
