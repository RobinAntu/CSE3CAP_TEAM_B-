import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface GetTasksForUserData {
  tasks: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    dueDate: TimestampString;
    estimatedTime: number;
    isCompleted?: boolean | null;
    priority: string;
  } & Task_Key)[];
}

export interface InsertUserData {
  user_insert: User_Key;
}

export interface ListSubjectsData {
  subjects: ({
    id: UUIDString;
    name: string;
  } & Subject_Key)[];
}

export interface Schedule_Key {
  id: UUIDString;
  __typename?: 'Schedule_Key';
}

export interface StudySession_Key {
  id: UUIDString;
  __typename?: 'StudySession_Key';
}

export interface Subject_Key {
  id: UUIDString;
  __typename?: 'Subject_Key';
}

export interface Task_Key {
  id: UUIDString;
  __typename?: 'Task_Key';
}

export interface UpdateTaskData {
  task_update?: Task_Key | null;
}

export interface UpdateTaskVariables {
  taskId: UUIDString;
  isCompleted: boolean;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface InsertUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<InsertUserData, undefined>;
  operationName: string;
}
export const insertUserRef: InsertUserRef;

export function insertUser(): MutationPromise<InsertUserData, undefined>;
export function insertUser(dc: DataConnect): MutationPromise<InsertUserData, undefined>;

interface GetTasksForUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetTasksForUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetTasksForUserData, undefined>;
  operationName: string;
}
export const getTasksForUserRef: GetTasksForUserRef;

export function getTasksForUser(): QueryPromise<GetTasksForUserData, undefined>;
export function getTasksForUser(dc: DataConnect): QueryPromise<GetTasksForUserData, undefined>;

interface UpdateTaskRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateTaskVariables): MutationRef<UpdateTaskData, UpdateTaskVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateTaskVariables): MutationRef<UpdateTaskData, UpdateTaskVariables>;
  operationName: string;
}
export const updateTaskRef: UpdateTaskRef;

export function updateTask(vars: UpdateTaskVariables): MutationPromise<UpdateTaskData, UpdateTaskVariables>;
export function updateTask(dc: DataConnect, vars: UpdateTaskVariables): MutationPromise<UpdateTaskData, UpdateTaskVariables>;

interface ListSubjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSubjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListSubjectsData, undefined>;
  operationName: string;
}
export const listSubjectsRef: ListSubjectsRef;

export function listSubjects(): QueryPromise<ListSubjectsData, undefined>;
export function listSubjects(dc: DataConnect): QueryPromise<ListSubjectsData, undefined>;

