import styled from "@emotion/styled";
import { Modal, Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
  padding-top: 20px;
  height: 128px;
  display: flex;
  flex-direction: column;
`;
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
export const Star = styled(Rate)`
  margin-left: 15px;
`;

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
  margin-left: 58px;
  margin-top: 10px;
`;

export const Contents = styled.div`
  color: #4f4f4f;
  font-size: 16px;
  font-weight: 400;
  margin-top: 15px;
`;

export const Line = styled.div`
  border-top: 1px solid #bdbdbd;
  width: 100%;
  margin-bottom: 20px;
`;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
