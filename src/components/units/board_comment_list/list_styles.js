import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Writer = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: black;
`;
export const Star = styled(Rate)``;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const SubIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #bdbdbd;
`;

export const Contents = styled.div`
  color: #4f4f4f;
  font-size: 16px;
  font-weight: 400;
`;
