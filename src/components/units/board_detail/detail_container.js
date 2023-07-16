import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Detail_ui from "./detail_presenter";
import { FETCH_BOARD } from "./detail_query";
//게시물 조회
//넹기분굿^^ㅎㅎ
export default function Detail_container() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  console.log(data);
  return <Detail_ui DT={data} />;
}
