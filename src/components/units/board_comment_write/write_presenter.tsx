import * as S from "./write_styles";
import { ICommentWriteUIProps } from "./write_types";
export default function CommentWriteUi(props: ICommentWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Line />
      <S.ImageWrapper>
        <S.SmallImg src="../../../../images/write.png" />
        <S.HeaderText>댓글</S.HeaderText>
      </S.ImageWrapper>
      <S.HeaderWrapper>
        <S.HeaderInput placeholder="작성자" onChange={props.onChangeWriter} />
        <S.HeaderInput
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        />
        <S.MyRate onChange={props.onChangeStar} />
      </S.HeaderWrapper>
      <S.BodyInput
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        maxLength={100}
        onChange={props.onChangeContents}
      />

      <S.Bottom>
        <S.Length>
          {props.contentsLength ? props.contentsLength : "0"}/100
        </S.Length>
        <S.SubmitBtn onClick={props.onClickSubmit}>등록하기</S.SubmitBtn>
      </S.Bottom>
    </S.Wrapper>
  );
}
