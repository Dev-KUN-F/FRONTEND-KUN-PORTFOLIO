import {
  Avatar,
  AvatarWrapper,
  Body,
  BottomWrapper,
  Button,
  CardWrapper,
  Contents,
  CreatedAt,
  Header,
  Info,
  Title,
  Wrapper,
  Writer,
} from "./detail_styled";
export default function Detail_ui(props) {
  return (
    <Wrapper>
      <CardWrapper>
        <Header>
          <AvatarWrapper>
            <Avatar src="../../../../images/avatar.png" />
            <Info>
              <Writer>{props.DT?.fetchBoard?.writer}</Writer>
              <CreatedAt>{props.DT?.fetchBoard?.createdAt}</CreatedAt>
            </Info>
          </AvatarWrapper>
        </Header>
        <Body>
          <Title>{props.DT?.fetchBoard?.title}</Title>
          <Contents>{props.DT?.fetchBoard?.contents}</Contents>
        </Body>
      </CardWrapper>
      <BottomWrapper>
        <Button>목록으로</Button>
        <Button>수정하기</Button>
        <Button>삭제하기</Button>
      </BottomWrapper>
    </Wrapper>
  );
}
