import { useRouter } from "next/router";
import CommentListUi from "./list_presenter";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD_COMMENT, FETCH_COMMENT_LIST } from "./list_query";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent, useState } from "react";

// export default function CommentListPage() {
//   const router = useRouter();
//   if (!router || typeof router.query.boarId !== "string") return <></>;

//   const [deleteBoardComment] = useMutation<
//     Pick<IMutation, "deleteBoardComment">,
//     IMutationDeleteBoardCommentArgs
//   >(DELETE_BOARD_COMMENT);

//   // const { data } = useQuery<
//   //   Pick<IQuery, "fetchBoardComments">,
//   //   IQueryFetchBoardCommentsArgs
//   // >(FETCH_COMMENT_LIST, {
//   //   variables: { boardId: String(router.query.boardId) },
//   // });
//   const { data } = useQuery<
//     Pick<IQuery, "fetchBoardComments">,
//     IQueryFetchBoardCommentsArgs
//   >(FETCH_COMMENT_LIST, {
//     variables: { boardId: router.query.boardId },
//   });

//   const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
//     const password = prompt("비밀번호를 입력하세요.");
//     try {
//       if (!(event.target instanceof HTMLImageElement)) {
//         alert("시스템에 문제가 있습니다.");
//         return;
//       }
//       await deleteBoardComment({
//         variables: {
//           password,
//           boardCommentId: event.target.id,
//         },
//         refetchQueries: [
//           {
//             query: FETCH_COMMENT_LIST,
//             variables: { boardId: router.query.boardId },
//           },
//         ],
//       });
//     } catch (error) {
//       if (error instanceof Error) alert(error.message);
//     }
//   };
export default function BoardCommentList(): JSX.Element {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") return <></>;

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_COMMENT_LIST, {
    variables: { boardId: router.query.boardId },
  });

  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    // const password = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT_LIST,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLImageElement>,
  ): void => {
    setBoardCommentId(event.currentTarget.id);
    setIsOpenModal(true);
  };

  const onChangeDeletePassword = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(event.target.value);
  };

  return (
    <CommentListUi
      data={data}
      onClickDelete={onClickDelete}
      isOpenModal={isOpenModal}
      onChangeDeletePassword={onChangeDeletePassword}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
    />
  );
}
