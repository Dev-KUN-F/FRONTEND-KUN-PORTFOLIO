import styled from "@emotion/styled";

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.div`
  min-width: 30px;
  max-width: 30px;

  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "#f7e600" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;

export const PageBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;

  align-items: center;
`;
