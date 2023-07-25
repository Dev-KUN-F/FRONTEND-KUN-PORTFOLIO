import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Detail_ui from "./detail_presenter";
import { FETCH_BOARD } from "./detail_query";
//게시물 조회
//넹기분굿^^ㅎㅎddd
export default function Detail_container() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const onClickMoveBoardList = () => {
    router.push("/boards");
  };

  const onClickMoveBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  console.log(data);
  return (
    <Detail_ui
      onClickMoveBoardList={onClickMoveBoardList}
      onClickMoveBoardEdit={onClickMoveBoardEdit}
      on
      DT={data}
    />
  );
}
