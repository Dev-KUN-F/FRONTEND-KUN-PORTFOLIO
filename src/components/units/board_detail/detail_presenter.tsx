import { Tooltip } from "antd";
import { getDate } from "../../../commons/libraries/units";
import * as S from "./detail_styled";
import { IDetailUIProps } from "./detail_types";

export default function Detail_ui(props: IDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>
                {getDate(props.data?.fetchBoard?.createdAt)}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.IconWrapper>
            <S.LinkIcon src="/images/link.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} ${
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }`}
            >
              <S.LocationIcon src="/images/location.png" />
            </Tooltip>
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          {props.data?.fetchBoard.youtubeUrl !== "" && (
            <S.Youtube
              url={props.data?.fetchBoard.youtubeUrl ?? ""}
              width="486px"
              height="240px"
            />
          )}
        </S.Body>
        <S.LikeWrapper>
          <S.ColumnWrapper onClick={props.onClickLike}>
            <S.LikeButton src="/images/like.png" />
            <S.LikeSpan>{props.data?.fetchBoard?.likeCount}</S.LikeSpan>
          </S.ColumnWrapper>
          <S.ColumnWrapper onClick={props.onClickDislike}>
            <S.LikeButton src="/images/dislike.png" />
            <S.DislikeSpan>
              {props.data?.fetchBoard?.dislikeCount}
            </S.DislikeSpan>
          </S.ColumnWrapper>
        </S.LikeWrapper>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveBoardList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveBoardEdit}>수정하기</S.Button>
        <S.Button>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
