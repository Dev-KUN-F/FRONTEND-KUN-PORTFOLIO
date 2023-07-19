import List_UI from "./list_presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./list_query";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickMoveBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
    console.log(event.target.id);
  };

  return (
    <List_UI
      data={data}
      onClickMoveBoardNew={onClickMoveBoardNew}
      onClickMoveBoardDetail={onClickMoveBoardDetail}
    />
  );
}
