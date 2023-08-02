import { ChangeEvent, useState } from "react";
import CommentWriteUi from "./write_presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./write_query";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../commons/types/generated/types";
import { FETCH_COMMENT_LIST } from "../board_comment_list/list_query";

export default function BoardCommentWrite() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [myStar, setMyStar] = useState(0);
  const router = useRouter();
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onChangeStar = (value) => {
    setMyStar(value);
  };

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const onClickSubmit = async () => {
    const result = await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer: writer,
          password: password,
          contents: contents,
          rating: myStar,
        },
        boardId: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_COMMENT_LIST,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  return (
    <CommentWriteUi
      onChangeContents={onChangeContents}
      onChangePassword={onChangePassword}
      onChangeWriter={onChangeWriter}
      onClickSubmit={onClickSubmit}
      onChangeStar={onChangeStar}
      contentsLength={contents.length}
    />
  );
}
