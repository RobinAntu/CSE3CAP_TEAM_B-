import { InsertUserData, GetTasksForUserData, UpdateTaskData, UpdateTaskVariables, ListSubjectsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useInsertUser(options?: useDataConnectMutationOptions<InsertUserData, FirebaseError, void>): UseDataConnectMutationResult<InsertUserData, undefined>;
export function useInsertUser(dc: DataConnect, options?: useDataConnectMutationOptions<InsertUserData, FirebaseError, void>): UseDataConnectMutationResult<InsertUserData, undefined>;

export function useGetTasksForUser(options?: useDataConnectQueryOptions<GetTasksForUserData>): UseDataConnectQueryResult<GetTasksForUserData, undefined>;
export function useGetTasksForUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetTasksForUserData>): UseDataConnectQueryResult<GetTasksForUserData, undefined>;

export function useUpdateTask(options?: useDataConnectMutationOptions<UpdateTaskData, FirebaseError, UpdateTaskVariables>): UseDataConnectMutationResult<UpdateTaskData, UpdateTaskVariables>;
export function useUpdateTask(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateTaskData, FirebaseError, UpdateTaskVariables>): UseDataConnectMutationResult<UpdateTaskData, UpdateTaskVariables>;

export function useListSubjects(options?: useDataConnectQueryOptions<ListSubjectsData>): UseDataConnectQueryResult<ListSubjectsData, undefined>;
export function useListSubjects(dc: DataConnect, options?: useDataConnectQueryOptions<ListSubjectsData>): UseDataConnectQueryResult<ListSubjectsData, undefined>;
