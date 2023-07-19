import * as S from "./detail_styled";
export default function Detail_ui(props) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="../../../../images/avatar.png" />
            <S.Info>
              <S.Writer>{props.DT?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>{props.DT?.fetchBoard?.createdAt}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.DT?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.DT?.fetchBoard?.contents}</S.Contents>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveBoardList}>목록으로</S.Button>
        <S.Button>수정하기</S.Button>
        <S.Button>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
