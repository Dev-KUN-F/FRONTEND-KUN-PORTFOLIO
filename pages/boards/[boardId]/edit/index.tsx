import { useRouter } from "next/router";
import Write_container from "../../../../src/components/units/board_write/write_container";
import { gql, useQuery } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function BoardsNewPage() {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") return <></>;
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return <Write_container isEdit={true} data={data} />;
}
