const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'cse3capteamb',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const insertUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InsertUser');
}
insertUserRef.operationName = 'InsertUser';
exports.insertUserRef = insertUserRef;

exports.insertUser = function insertUser(dc) {
  return executeMutation(insertUserRef(dc));
};

const getTasksForUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetTasksForUser');
}
getTasksForUserRef.operationName = 'GetTasksForUser';
exports.getTasksForUserRef = getTasksForUserRef;

exports.getTasksForUser = function getTasksForUser(dc) {
  return executeQuery(getTasksForUserRef(dc));
};

const updateTaskRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateTask', inputVars);
}
updateTaskRef.operationName = 'UpdateTask';
exports.updateTaskRef = updateTaskRef;

exports.updateTask = function updateTask(dcOrVars, vars) {
  return executeMutation(updateTaskRef(dcOrVars, vars));
};

const listSubjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListSubjects');
}
listSubjectsRef.operationName = 'ListSubjects';
exports.listSubjectsRef = listSubjectsRef;

exports.listSubjects = function listSubjects(dc) {
  return executeQuery(listSubjectsRef(dc));
};
