export const PRODUCT_CATEGORY = {
  NEW_COLLECTION: 31,
  SALES: 37,
  LAST_CHANCE: 38,
};

export type ProductCategoryType = (typeof PRODUCT_CATEGORY)[keyof typeof PRODUCT_CATEGORY];
