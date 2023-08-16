import CommentListPage from "../../../src/components/units/board_comment_list/list_container";
import BoardCommentWrite from "../../../src/components/units/board_comment_write/write_container";
import DetailContainer from "../../../src/components/units/board_detail/detail_container";

// 게시물 상세 페이지
export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <DetailContainer />
      <BoardCommentWrite />
      <CommentListPage />
    </>
  );
}
