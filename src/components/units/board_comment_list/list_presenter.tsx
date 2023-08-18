import { getDate } from "../../../commons/libraries/units";
import * as S from "./list_styles";
import { ICommentListUIProps } from "./list_types";
export default function CommentListUi(props: ICommentListUIProps): JSX.Element {
  return (
    <div>
      {props.isOpenModal && (
        <S.PasswordModal visible={true} onOk={props.onClickDelete}>
          <div>비밀번호 입력</div>
          <S.PasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </S.PasswordModal>
      )}
      {props.data?.fetchBoardComments.map((el) => (
        <>
          <S.Wrapper>
            <S.Line />
            <S.FlexWrapper>
              <S.Avatar src="/images/avatar.png" />
              <S.MainWrapper>
                <S.WriterWrapper>
                  <S.Writer>{el.writer}</S.Writer>
                  <S.Star value={el.rating} disabled />
                </S.WriterWrapper>
                <S.Contents>{el.contents}</S.Contents>
              </S.MainWrapper>
              <S.OptionWrapper>
                <S.SubIcon src="/images/edit.png" />
                <S.SubIcon
                  id={el._id}
                  src="/images/delete.png"
                  onClick={props.onClickOpenDeleteModal}
                />
              </S.OptionWrapper>
            </S.FlexWrapper>
            <S.Date>{getDate(el?.createdAt)}</S.Date>
          </S.Wrapper>
        </>
      ))}
    </div>
  );
}
