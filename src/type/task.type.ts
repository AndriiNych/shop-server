export const TASK_NAME = {
  BALANS: 'balance',
  SALES_NEW: 'sales&new',
  SALES_UPDATE: 'sales_update',
};

export const TASK_NAME_ARRAY = Object.values(TASK_NAME);

export type TaskNameType = (typeof TASK_NAME)[keyof typeof TASK_NAME];
