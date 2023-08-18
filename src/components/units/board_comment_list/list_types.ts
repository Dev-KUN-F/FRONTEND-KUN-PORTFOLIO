import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  isOpenModal: boolean;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
}
