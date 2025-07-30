export const ATTRIBUTE_VALUE = {
  GENDER: 1,
  FABRIC: 2,
  SIZE_DRESS: 3,
  TYPE_DRESS: 4,
  COLLECTION: 7,
  SIZE: 8,
  COLOR_CODE: 9,
  COLOR_ONE: 10,
  SIZE_HATS: 11,
};

export type AttributeValueType = (typeof ATTRIBUTE_VALUE)[keyof typeof ATTRIBUTE_VALUE];
