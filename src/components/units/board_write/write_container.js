import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Write_ui from "./write_presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./write_query";

export default function Write_container(props) {
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

  function onChangeWriter(event) {
    //state 에 데이터 할당
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }

  function onChangeSubject(event) {
    setSubject(event.target.value);
    if (event.target.value !== "") {
      setSubjectError("");
    }
  }

  function onChangeContents(event) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  }

  function onChangeZipcode(event) {
    setContents(event.target.value);
  }

  function onChangeYoutube(event) {
    setYoutube(event.target.value);
  }

  const [createBoard] = useMutation(CREATE_BOARD);
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
      alert(error.message);
    }
  };

  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickUpdate = async () => {
    if (!title && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const myvariables = {
      id: router.query.boardId,
      password: password,
      updateBoardInput: {},
    };
    if (subject) myvariables.updateBoardInput.title = subject;
    if (contents) myvariables.updateBoardInput.contents = contents;
    try {
      const result = await updateBoard({
        variables: myvariables,
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
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
