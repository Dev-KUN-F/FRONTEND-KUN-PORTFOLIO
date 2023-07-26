import { getDate } from "../../../commons/libraries/units";
import * as S from "./list_styles";
export default function CommentListUi(props) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <S.Wrapper key={el._id}>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el?.writer}</S.Writer>
                <S.Star value={props.el?.rating} disabled />
              </S.WriterWrapper>
              <S.Contents>{props.el?.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.SubIcon src="/images/edit.png" />
              <S.SubIcon src="/images/delete.png" />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.Date>{getDate(props.el?.createAt)}</S.Date>
        </S.Wrapper>
      ))}
    </>
  );
}
