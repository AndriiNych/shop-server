export const IS_TABLE_LIST = {
  ATTRIBUTE: 'attribute',
  ATTRIBUTE_DESCRIPTION: 'attribute_description',
  ATTRIBUTE_VALUE: 'attribute_value',
  ATTRIBUTE_VALUE_DESCRIPTION: 'attribute_value_description',
  CATEGORY: 'category',
  CATEGORY_DESCRIPTION: 'category_description',
  CATEGORY_PATH: 'category_path',
  MENU: 'menu',
  MENU_DESCRIPTION: 'menu_description',
  MENU_PATH: 'menu_path',
  PRODUCT: 'product',
  PRODUCT_ATTRIBUTES: 'product_attributes',
  PRODUCT_CATEGORY: 'product_category',
  PRODUCT_DESCRIPTION: 'product_description',
  PRODUCT_IMAGES: 'product_images',
  PRODUCT_SPECIAL: 'product_special',
  PRODUCT_STICKERS: 'product_stickers',
};

export const IS_TABLE_LIST_AS_ARRAY = Object.values(IS_TABLE_LIST);

export type IsTableListType = (typeof IS_TABLE_LIST_AS_ARRAY)[number];
