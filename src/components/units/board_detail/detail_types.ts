import { IQuery } from "../../../commons/types/generated/types";

export interface IDetailUIProps {
  onClickMoveBoardList: () => void;
  onClickMoveBoardEdit: () => void;
  onClickLike: () => Promise<void>;
  onClickDislike: () => Promise<void>;

  data?: Pick<IQuery, "fetchBoard">;
}
