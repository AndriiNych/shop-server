export const STATUS = {
  OFF: 0,
  ON: 1,
};

export type StatusType = (typeof STATUS)[keyof typeof STATUS];
