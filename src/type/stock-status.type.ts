export const STOCK_STATUS = {
  DISABLED: 1,
  AVAILABLE: 2,
  LIMITED: 3,
  NOT_AVAILABLE: 4,
  HIDDEN: 5,
};

export type StockStatusType = (typeof STOCK_STATUS)[keyof typeof STOCK_STATUS];
