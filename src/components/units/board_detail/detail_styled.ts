import { Image } from "next/image";
import { ErrorLog } from "./../board_write/write_styled";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 51px;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  align-items: center;
`;

export const LikeSpan = styled.span`
  color: #ffd600;
  font-size: 18px;
  font-weight: 400;
`;

export const DislikeSpan = styled.span`
  color: #828282;
  font-size: 18px;
  font-weight: 400;
`;

export const LikeButton = styled.img`
  width: 24px;
  height: 24px;
  border: 0px solid;
`;

export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;
