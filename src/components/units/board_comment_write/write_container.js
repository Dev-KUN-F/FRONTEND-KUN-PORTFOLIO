import { useState } from "react";
import CommentWriteUi from "./write_presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./write_query";
import { useRouter } from "next/router";

export default function BoardCommentWrite() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [myStar, setMyStar] = useState(0);
  const router = useRouter();
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onChangeStar = (value) => {
    setMyStar(value);
  };

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const onClickSubmit = async () => {
    const result = await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer: writer,
          password: password,
          contents: contents,
          rating: myStar,
        },
        boardId: router.query.boardId,
      },
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
