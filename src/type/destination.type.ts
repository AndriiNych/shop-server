export const DESTINATION_NAME = {
  PRODUCT_CATEGORY: 'product_category',
  PRODUCT_SPECIAL: 'product_special',
  PRODUCT_STICKERS: 'product_stickers',
};

export type DestinationNameType = (typeof DESTINATION_NAME)[keyof typeof DESTINATION_NAME];
