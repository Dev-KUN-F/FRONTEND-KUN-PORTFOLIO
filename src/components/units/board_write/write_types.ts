import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSubject: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;

  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  isOpen: boolean;
  zipcode: string;
  address: string;
  WE: string;
  PE: string;
  SE: string;
  CE: string;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
