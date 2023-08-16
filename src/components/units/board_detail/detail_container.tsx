import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import Detail_ui from "./detail_presenter";
import { DISLIKE_BOARD, FETCH_BOARD, LIKE_BOARD } from "./detail_query";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../commons/types/generated/types";
// 게시물 조회
// 넹기분굿^^ㅎㅎddd
export default function DetailContainer(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    },
  );

  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const onClickMoveBoardList = (): void => {
    void router.push("/boards");
  };

  const onClickMoveBoardEdit = (): void => {
    void router.push(`/boards/${String(router.query.boardId)}/edit`);
  };

  const onClickLike = async (): Promise<void> => {
    await likeBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
  };

  const onClickDislike = async (): Promise<void> => {
    await dislikeBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
  };

  console.log(data);
  return (
    <Detail_ui
      onClickMoveBoardList={onClickMoveBoardList}
      onClickMoveBoardEdit={onClickMoveBoardEdit}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      data={data}
    />
  );
}
