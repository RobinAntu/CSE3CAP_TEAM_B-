# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetTasksForUser*](#gettasksforuser)
  - [*ListSubjects*](#listsubjects)
- [**Mutations**](#mutations)
  - [*InsertUser*](#insertuser)
  - [*UpdateTask*](#updatetask)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetTasksForUser
You can execute the `GetTasksForUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getTasksForUser(): QueryPromise<GetTasksForUserData, undefined>;

interface GetTasksForUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetTasksForUserData, undefined>;
}
export const getTasksForUserRef: GetTasksForUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getTasksForUser(dc: DataConnect): QueryPromise<GetTasksForUserData, undefined>;

interface GetTasksForUserRef {
  ...
  (dc: DataConnect): QueryRef<GetTasksForUserData, undefined>;
}
export const getTasksForUserRef: GetTasksForUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getTasksForUserRef:
```typescript
const name = getTasksForUserRef.operationName;
console.log(name);
```

### Variables
The `GetTasksForUser` query has no variables.
### Return Type
Recall that executing the `GetTasksForUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetTasksForUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetTasksForUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getTasksForUser } from '@dataconnect/generated';


// Call the `getTasksForUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getTasksForUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getTasksForUser(dataConnect);

console.log(data.tasks);

// Or, you can use the `Promise` API.
getTasksForUser().then((response) => {
  const data = response.data;
  console.log(data.tasks);
});
```

### Using `GetTasksForUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getTasksForUserRef } from '@dataconnect/generated';


// Call the `getTasksForUserRef()` function to get a reference to the query.
const ref = getTasksForUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getTasksForUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.tasks);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.tasks);
});
```

## ListSubjects
You can execute the `ListSubjects` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listSubjects(): QueryPromise<ListSubjectsData, undefined>;

interface ListSubjectsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSubjectsData, undefined>;
}
export const listSubjectsRef: ListSubjectsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listSubjects(dc: DataConnect): QueryPromise<ListSubjectsData, undefined>;

interface ListSubjectsRef {
  ...
  (dc: DataConnect): QueryRef<ListSubjectsData, undefined>;
}
export const listSubjectsRef: ListSubjectsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listSubjectsRef:
```typescript
const name = listSubjectsRef.operationName;
console.log(name);
```

### Variables
The `ListSubjects` query has no variables.
### Return Type
Recall that executing the `ListSubjects` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListSubjectsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListSubjectsData {
  subjects: ({
    id: UUIDString;
    name: string;
  } & Subject_Key)[];
}
```
### Using `ListSubjects`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listSubjects } from '@dataconnect/generated';


// Call the `listSubjects()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listSubjects();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listSubjects(dataConnect);

console.log(data.subjects);

// Or, you can use the `Promise` API.
listSubjects().then((response) => {
  const data = response.data;
  console.log(data.subjects);
});
```

### Using `ListSubjects`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listSubjectsRef } from '@dataconnect/generated';


// Call the `listSubjectsRef()` function to get a reference to the query.
const ref = listSubjectsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listSubjectsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.subjects);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.subjects);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## InsertUser
You can execute the `InsertUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertUser(): MutationPromise<InsertUserData, undefined>;

interface InsertUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertUserData, undefined>;
}
export const insertUserRef: InsertUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertUser(dc: DataConnect): MutationPromise<InsertUserData, undefined>;

interface InsertUserRef {
  ...
  (dc: DataConnect): MutationRef<InsertUserData, undefined>;
}
export const insertUserRef: InsertUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertUserRef:
```typescript
const name = insertUserRef.operationName;
console.log(name);
```

### Variables
The `InsertUser` mutation has no variables.
### Return Type
Recall that executing the `InsertUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertUserData {
  user_insert: User_Key;
}
```
### Using `InsertUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertUser } from '@dataconnect/generated';


// Call the `insertUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertUser(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
insertUser().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `InsertUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertUserRef } from '@dataconnect/generated';


// Call the `insertUserRef()` function to get a reference to the mutation.
const ref = insertUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateTask
You can execute the `UpdateTask` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateTask(vars: UpdateTaskVariables): MutationPromise<UpdateTaskData, UpdateTaskVariables>;

interface UpdateTaskRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateTaskVariables): MutationRef<UpdateTaskData, UpdateTaskVariables>;
}
export const updateTaskRef: UpdateTaskRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateTask(dc: DataConnect, vars: UpdateTaskVariables): MutationPromise<UpdateTaskData, UpdateTaskVariables>;

interface UpdateTaskRef {
  ...
  (dc: DataConnect, vars: UpdateTaskVariables): MutationRef<UpdateTaskData, UpdateTaskVariables>;
}
export const updateTaskRef: UpdateTaskRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateTaskRef:
```typescript
const name = updateTaskRef.operationName;
console.log(name);
```

### Variables
The `UpdateTask` mutation requires an argument of type `UpdateTaskVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateTaskVariables {
  taskId: UUIDString;
  isCompleted: boolean;
}
```
### Return Type
Recall that executing the `UpdateTask` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateTaskData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateTaskData {
  task_update?: Task_Key | null;
}
```
### Using `UpdateTask`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateTask, UpdateTaskVariables } from '@dataconnect/generated';

// The `UpdateTask` mutation requires an argument of type `UpdateTaskVariables`:
const updateTaskVars: UpdateTaskVariables = {
  taskId: ..., 
  isCompleted: ..., 
};

// Call the `updateTask()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateTask(updateTaskVars);
// Variables can be defined inline as well.
const { data } = await updateTask({ taskId: ..., isCompleted: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateTask(dataConnect, updateTaskVars);

console.log(data.task_update);

// Or, you can use the `Promise` API.
updateTask(updateTaskVars).then((response) => {
  const data = response.data;
  console.log(data.task_update);
});
```

### Using `UpdateTask`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateTaskRef, UpdateTaskVariables } from '@dataconnect/generated';

// The `UpdateTask` mutation requires an argument of type `UpdateTaskVariables`:
const updateTaskVars: UpdateTaskVariables = {
  taskId: ..., 
  isCompleted: ..., 
};

// Call the `updateTaskRef()` function to get a reference to the mutation.
const ref = updateTaskRef(updateTaskVars);
// Variables can be defined inline as well.
const ref = updateTaskRef({ taskId: ..., isCompleted: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateTaskRef(dataConnect, updateTaskVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.task_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.task_update);
});
```

