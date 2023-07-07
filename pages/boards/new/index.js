import {
  Address,
  ButtonWrapper,
  Contents,
  ErrorLog,
  ErrorWrapper,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
} from "../../../styles/boardsNew";
import { useState } from "react";

export default function BoardsNewPage() {
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

  function onClickSubBtn() {
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
      alert("게시물이 등록되었습니다!");
    }
  }

  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            onChange={onChangeWriter}
            placeholder="이름을 적어주세요."
          />
          <ErrorLog>{writerError}</ErrorLog>
        </InputWrapper>

        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            onChange={onChangePassword}
            placeholder="비밀번호를 작성해주세요."
          />
          <ErrorLog>{passwordError}</ErrorLog>
        </InputWrapper>
      </WriterWrapper>

      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          onChange={onChangeSubject}
          placeholder="제목을 작성해주세요."
        />
        <ErrorLog>{subjectError}</ErrorLog>
      </InputWrapper>

      <InputWrapper>
        <Label>내용</Label>
        <Contents
          onChange={onChangeContents}
          placeholder="내용을 작성해주세요."
        />
        <ErrorLog>{contentsError}</ErrorLog>
      </InputWrapper>

      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode onChange={onChangeZipcode} placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>

        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube
          onChange={onChangeYoutube}
          placeholder="링크를 복사해주세요."
        />
      </InputWrapper>

      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={onClickSubBtn}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
