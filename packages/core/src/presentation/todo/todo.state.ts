import {
  ToDoListEntity
} from '../../domain/todo/entity/todo.entity'

export interface CommonListsState {
    lists: ToDoListEntity
}

export interface LoadingListsState {
    kind: "LoadingListsState";

}

export interface LoadedListsState {
    kind: "LoadedListsState";
    lists: ToDoListEntity;
}

export interface ErrorListsState {
    kind: "ErrorListsState";
    error: string;
}

export type ListsState = (LoadingListsState | LoadedListsState | ErrorListsState) &
    CommonListsState;

export const ListsInitialState: ListsState = {
    kind: "LoadingListsState",
    lists: []
};

export interface UnexpectedError {
  kind: "UnexpectedError";
  error: Error;
}

export type DataError = UnexpectedError;

