import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface IListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveBoardNew: () => void;
  onClickMoveBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
}
