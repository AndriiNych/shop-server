export const ACTION_CRUD = {
  SELECT: 'select',
  INSERT: 'insert',
  DELETE: 'delete',
  UPDATE: 'update',
};

export type ActionCrud = (typeof ACTION_CRUD)[keyof typeof ACTION_CRUD];
