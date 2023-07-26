import { useRouter } from "next/router";
import CommentListUi from "./list_presenter";
import { useQuery } from "@apollo/client";
import { FETCH_COMMENT_LIST } from "./list_query";

export default function CommentListPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_COMMENT_LIST);

  return <CommentListUi data={data} />;
}
