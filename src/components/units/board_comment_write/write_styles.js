import styled from "@emotion/styled";
import { Rate } from "antd";
export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const Line = styled.div`
  width: 1200px;
  border-top: 1px solid #bdbdbd;
  margin-bottom: 50px;
`;

export const SmallImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 14px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const HeaderInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  color: #bdbdbd;
  margin-right: 20px;
  padding-left: 14px;
`;

export const HeaderText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const BodyInput = styled.textarea`
  width: 100%;
  height: 130px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  margin-bottom: 20px;
  border: 1px solid #bdbdbd;
`;

export const Length = styled.div`
  width: 1109px;
  height: 52px;
  color: #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubmitBtn = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: white;
  :hover {
    background-color: white;
    color: black;
  }
`;

export const MyRate = styled(Rate)``;
