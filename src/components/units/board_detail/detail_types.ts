import { IQuery } from "../../../commons/types/generated/types";

export interface IDetailUIProps {
  onClickMoveBoardList: () => void;
  onClickMoveBoardEdit: () => void;

  data?: Pick<IQuery, "fetchBoard">;
}
