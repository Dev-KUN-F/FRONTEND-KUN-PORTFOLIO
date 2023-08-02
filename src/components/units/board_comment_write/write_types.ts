import { ChangeEvent } from "react";
export interface ICommentWriteUIProps {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onChangeStar: (event) => void;
  contentsLength: number;
}
