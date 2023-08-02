import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Write_ui from "./write_presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./write_query";
import { IUpdateBoardInput } from "../../../commons/types/generated/types";
import { IWriteProps } from "./write_types";

export default function Write_container(props: IWriteProps) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [contents, setContents] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [youtube, setYoutube] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    //state 에 데이터 할당
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  const onChangeSubject = (event: ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
    if (event.target.value !== "") {
      setSubjectError("");
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  };

  const onChangeZipcode = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutube(event.target.value);
  };

  const submit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title: subject,
            contents,
          },
        },
      });
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async () => {
    if (!subject && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (subject) updateBoardInput.title = subject;
    if (contents) updateBoardInput.contents = contents;
    try {
      if (typeof router.query.boardId !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // SUBMIT버튼 클릭시 조건에따라 에러문 출력 정상이면 게시물 등록.
  function onClickSubmit() {
    if (!writer) {
      setWriterError("이름이 비어있습니다.");
    }
    if (!password) {
      setPasswordError("비밀번호가 비어있습니다.");
    }
    if (!subject) {
      setSubjectError("제목이 비어있습니다.");
    }
    if (!contents) {
      setContentsError("내용이 비어있습니다.");
    }
    if (writer && password && subject && contents) {
      try {
        submit();
        alert("게시물이 등록되었습니다!");
      } catch (error) {
        alert(error.message);
      }
    }
  }
  return (
    <Write_ui
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeSubject={onChangeSubject}
      onChangeContents={onChangeContents}
      onChangeZipcode={onChangeZipcode}
      onChangeYoutube={onChangeYoutube}
      WE={writerError}
      PE={passwordError}
      SE={subjectError}
      CE={contentsError}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
