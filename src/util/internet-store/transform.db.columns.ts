import { getMetadataArgsStorage } from 'typeorm';
import { IS_TABLE_LIST, IsTableListType } from './table-list';
import { Product } from '@src/entities/product/product.entity';
import { ProductDescription } from '@src/entities/product-description/product-description.entity';
import { ProductImages } from '@src/entities/product-images/product-images.entity';
import { ProductCategory } from '@src/entities/product-category/product-category.entity';
import { ProductAttributes } from '@src/entities/product-attributes/product-attributes.entity';
import { ProductStickers } from '@src/entities/product-stikers/product-stikers.entity';

function mapToDbColumns<T>(entityClass: new () => T, obj: Partial<T>): Record<string, any> {
  const columns = getMetadataArgsStorage().columns.filter(col => col.target === entityClass);

  const fieldMap: Record<string, string> = {};
  for (const column of columns) {
    const propertyName = column.propertyName;
    const dbColumnName = column.options.name ?? propertyName;
    fieldMap[propertyName] = dbColumnName;
  }

  const result: Record<string, any> = {};
  for (const key in obj) {
    if (fieldMap[key]) {
      result[fieldMap[key]] = obj[key];
    }
  }

  return result;
}

export function transformFieldNameToDbColumn(tableName: IsTableListType, data: any[]): any[] {
  switch (tableName) {
    case IS_TABLE_LIST.PRODUCT:
      return data.map(elem => mapToDbColumns(Product, elem));
    case IS_TABLE_LIST.PRODUCT_DESCRIPTION:
      return data.map(elem => mapToDbColumns(ProductDescription, elem));
    case IS_TABLE_LIST.PRODUCT_ATTRIBUTES:
      return data.map(elem => mapToDbColumns(ProductAttributes, elem));
    case IS_TABLE_LIST.PRODUCT_CATEGORY:
      return data.map(elem => mapToDbColumns(ProductCategory, elem));
    case IS_TABLE_LIST.PRODUCT_IMAGES:
      return data.map(elem => mapToDbColumns(ProductImages, elem));
    case IS_TABLE_LIST.PRODUCT_STICKERS:
      return data.map(elem => mapToDbColumns(ProductStickers, elem));
  }
}
