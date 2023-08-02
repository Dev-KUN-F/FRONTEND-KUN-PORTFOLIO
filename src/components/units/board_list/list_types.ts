import { MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveBoardNew: () => void;
  onClickMoveBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
