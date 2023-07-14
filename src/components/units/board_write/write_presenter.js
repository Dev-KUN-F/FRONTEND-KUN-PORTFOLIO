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
} from "./write_styled";
export default function Write_ui(props) {
  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            onChange={props.OCwriter}
            placeholder="이름을 적어주세요."
          />
          <ErrorLog>{props.WE}</ErrorLog>
        </InputWrapper>

        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            onChange={props.OCpassword}
            placeholder="비밀번호를 작성해주세요."
          />
          <ErrorLog>{props.PE}</ErrorLog>
        </InputWrapper>
      </WriterWrapper>

      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          onChange={props.OCsubject}
          placeholder="제목을 작성해주세요."
        />
        <ErrorLog>{props.SE}</ErrorLog>
      </InputWrapper>

      <InputWrapper>
        <Label>내용</Label>
        <Contents
          onChange={props.OCcontents}
          placeholder="내용을 작성해주세요."
        />
        <ErrorLog>{props.CE}</ErrorLog>
      </InputWrapper>

      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode onChange={props.OCzipcode} placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>

        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube
          onChange={props.OCyoutube}
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
        <SubmitButton onClick={props.SubmitBtn}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
