import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100px;
  background-color: #2c2c2c;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  color: #f7e600;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: #f7e600;
  font-weight: bold;
  cursor: pointer;
`;

export const dividerLine = styled.div`
  width: 100%;
  border-bottom: 2px solid #2c2c2c;
`;
