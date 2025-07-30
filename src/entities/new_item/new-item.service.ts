import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewItem } from './new-item.entity';
import { IN_ES_TYPE } from '@src/type/in-es.type';
import { STATUS } from '@src/type/status.type';
import { STOCK_STATUS } from '@src/type/stock-status.type';
import { GLOBAL_CONST } from '@src/type/const.type';
import { Product } from '../product/product.entity';
import { ProductService } from '../product/product.service';
import { LanguageService } from '../language/language.service';
import { ModelItemSizeService } from '../model-item-size/model-item-size.service';
import { ModelItemSize } from '../model-item-size/model-item-size.entity';
import { ItemTypeDescriptionService } from '../item-type-description/item-type-description.service';
import { ItemTypeDescription } from '../item-type-description/item-type-description.entity';
import { FabricDescriptionService } from '../fabric-description/fabric-description.service';
import { FabricDescription } from '../fabric-description/fabric-description.entity';
import { SizeService } from '../size/size.service';
import { Size } from '../size/size.entity';
import { ColorFirstDescription } from '../color-first-description/color-first-description.entity';
import { ColorFirstDescriptionService } from '../color-first-description/color-first-description.service';
import { ColorCodeDescriptionService } from '../color-code-description/color-code-description.service';
import { ColorCodeDescription } from '../color-code-description/color-code-description.entity';
import { FabricCompositionDescription } from '../fabric-composition-description/fabric-composition-description.entity';
import { FabricCompositionDescriptionService } from '../fabric-composition-description/fabric-composition-description.service';
import { GenderDescription } from '../gender-description/gender-description.entity';
import { GenderDescriptionService } from '../gender-description/gender-description.service';
import { ProductDescription } from '../product-description/product-description.entity';
import {
  ProductStickersService,
  ProductStickersType,
} from '../product-stikers/product-stikers.service';
import { ATTRIBUTE_VALUE } from '@src/type/attribute.value';
import { AttributeValueService } from '../attribute-value/attribute-value.service';
import { CategoryRulesService } from '../category-rules/category-rules.service';
import { ProductDescriptionService } from '../product-description/product-description.service';
import { ProductAttributesService } from '../product-attributes/product-attributes.service';
import { ProductCategoryService } from '../product-category/product-category.service';
import { sendInsertRequest } from '@src/util/internet-store/data.insert';
import { IS_TABLE_LIST } from '@src/util/internet-store/table-list';
import { plainToInstance } from 'class-transformer';
import { ProductApiBaseDto } from '../product/dto/product.api.base.dto';
import { ProductInsertNewSiteDto } from '../product/dto/product.insert.new.site.dto';
import { ProductDescriptionInsertNewSiteDto } from '../product-description/dto/product-description.insert.new.site.dto';
import { PlainObjectToDatabaseEntityTransformer } from 'typeorm/query-builder/transformer/PlainObjectToDatabaseEntityTransformer.js';
import { ProductAttributesInsertNewSiteDto } from '../product-attributes/dto/product-attributes.insert.new.site.dto';
import { ProductStickersInsertNewSiteDto } from '../product-stikers/dto/product-stickers.insert.new.site.dto';
import { ProductCategoryInsertNewSiteDto } from '../product-category/dto/product-category.insert.new.site.dto';

type ProductParamsType = InstanceType<typeof ModelItemSize> & { vendorCode: string };
type ProductDescriptionType = Partial<InstanceType<typeof ProductDescription>>;

type attributeValueShortType = {
  attributeId: number;
  attributeValueId: number;
};

@Injectable()
export class NewItemService {
  constructor(
    @InjectRepository(NewItem)
    private readonly newItemRepository: Repository<NewItem>,
    private readonly languageService: LanguageService,
    private readonly productService: ProductService,
    private readonly modelItemSizeService: ModelItemSizeService,
    private readonly itemTypeDescriptionService: ItemTypeDescriptionService,
    private readonly fabricDescriptionService: FabricDescriptionService,
    private readonly sizeService: SizeService,
    private readonly colorFirstDescriptionService: ColorFirstDescriptionService,
    private readonly colorCodeDescriptionService: ColorCodeDescriptionService,
    private readonly fabricCompositionDescriptionService: FabricCompositionDescriptionService,
    private readonly genderDescriptionService: GenderDescriptionService,
    private readonly productStickersService: ProductStickersService,
    private readonly attributeValueService: AttributeValueService,
    private readonly categoryRulesService: CategoryRulesService,
    private readonly productDescriptionService: ProductDescriptionService,
    private readonly productAttributesService: ProductAttributesService,
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  public async moveToSite() {
    // console.log('move product');
    // const productList = await this.productService.getProductList({
    //   inEs: IN_ES_TYPE.CREATE,
    // });
    // const productListForInsert = plainToInstance(ProductInsertNewSiteDto, productList, {
    //   excludeExtraneousValues: true,
    // });
    // for (let idx = 0; idx < productListForInsert.length; idx++) {
    //   const result = await sendInsertRequest(IS_TABLE_LIST.PRODUCT, [productListForInsert[idx]]);
    //   //   // if (result[0].success !== 'ok') {
    //   //   //   return `error ${productListForInsert[idx]}`;
    //   //   // }
    //   // await this.productService.updateProductById(productListForInsert[idx].id, { inEs: 0 });
    // }
    // console.log('move product description');
    // const productDescriptionList = await this.productDescriptionService.getProductDescription({
    //   inEs: IN_ES_TYPE.CREATE,
    // });
    // const productDescriptionListForInsert = plainToInstance(
    //   ProductDescriptionInsertNewSiteDto,
    //   productDescriptionList,
    //   {
    //     excludeExtraneousValues: true,
    //   },
    // );
    // // console.log(productDescriptionListForInsert);
    // for (let idx = 0; idx < productDescriptionListForInsert.length; idx++) {
    //   // console.log(productDescriptionListForInsert[idx]);
    //   const result = await sendInsertRequest(IS_TABLE_LIST.PRODUCT_DESCRIPTION, [
    //     productDescriptionListForInsert[idx],
    //   ]);
    //   // переробити так, щоб можна було відслідковувати ID-шки
    //   // await this.productDescriptionService.updateProductDescriptionById(
    //   //   productDescriptionListForInsert[idx].id,
    //   //   { inEs: 0 },
    //   // );
    // }
    // console.log('move product attributes');
    // const productAttributesList = await this.productAttributesService.getProductAttributes({
    //   inEs: IN_ES_TYPE.CREATE,
    // });
    // const productAttributesListForInsert = plainToInstance(
    //   ProductAttributesInsertNewSiteDto,
    //   productAttributesList,
    //   { excludeExtraneousValues: true },
    // );
    // for (let idx = 0; idx < productAttributesListForInsert.length; idx++) {
    //   const result = await sendInsertRequest(IS_TABLE_LIST.PRODUCT_ATTRIBUTES, [
    //     productAttributesListForInsert[idx],
    //   ]);
    //   // переробити так, щоб можна було відслідковувати ID-шки
    // }
    // console.log('move product category');
    // const productCategoryList = await this.productCategoryService.getProductCategory({
    //   inEs: IN_ES_TYPE.CREATE,
    // });
    // const productCategoryListForInsert = plainToInstance(
    //   ProductCategoryInsertNewSiteDto,
    //   productCategoryList,
    //   { excludeExtraneousValues: true },
    // );
    // for (let idx = 0; idx < productCategoryListForInsert.length; idx++) {
    //   const result = await sendInsertRequest(IS_TABLE_LIST.PRODUCT_CATEGORY, [
    //     productCategoryListForInsert[idx],
    //   ]);
    // }
    // console.log('END product category');
    // console.log('move product stickers');
    // const productStickerList = await this.productStickersService.getProductStickers({
    //   inEs: IN_ES_TYPE.CREATE,
    // });
    // const productStickerListForInsert = plainToInstance(
    //   ProductStickersInsertNewSiteDto,
    //   productStickerList,
    //   { excludeExtraneousValues: true },
    // );
    // for (let idx = 0; idx < productStickerListForInsert.length; idx++) {
    //   const result = await sendInsertRequest(IS_TABLE_LIST.PRODUCT_STICKERS, [
    //     productStickerListForInsert[idx],
    //   ]);
    // }
    // console.log('END product stikers');
  }

  public async sss() {
    const newItemList = await this.newItemRepository.find();

    let productId = await this.productService.getMaxProductId();

    const item = newItemList[0];

    const result = [];

    for (let idx = 0; idx < newItemList.length; idx++) {
      // for (let idx = 0; idx < 10; idx++) {
      const { vendor_code: vendorCode } = newItemList[idx];
      const productParams = await this.getProductParams(vendorCode);
      // if (
      //   productParams.groupId === 276 ||
      //   productParams.groupId === 290 ||
      //   productParams.groupId === 153
      // )
      {
        productId++;
        console.log(productId);
        const product = this.createProductItem(vendorCode, productId);

        const productDescription = await this.createProductDescription(vendorCode, productId);

        const productSticker = await this.createProductStickers(productId);

        const productAttributes = await this.createProductAttributes(vendorCode, productId);

        const productCategory = await this.createProductCategory(vendorCode, productId);

        product.mainCategoryId = productCategory.length
          ? Math.max(...productCategory.map(item => item.categoryId))
          : 0;

        result.push({
          product,
          productDescription,
          productSticker,
          productAttributes,
          productCategory,
        });
        // console.log(result);
      }
    }

    const product = [];
    const productDescription = [];
    const productSticker = [];
    const productAttributes = [];
    const productCategory = [];

    for (let idx = 0; idx < result.length; idx++) {
      product.push(result[idx].product);
      productDescription.push(...result[idx].productDescription);
      productSticker.push(result[idx].productSticker);
      productAttributes.push(...result[idx].productAttributes);
      productCategory.push(...result[idx].productCategory);
    }

    await this.productService.saveProduct(product);
    console.log('save product');

    await this.productDescriptionService.saveProductDescription(productDescription);
    console.log('save product description');

    await this.productAttributesService.saveProductAttributes(productAttributes);
    console.log('save product attributes');

    await this.productCategoryService.saveProductCategory(productCategory);
    console.log('save product category');

    await this.productStickersService.saveProductStickers(productSticker as ProductStickersType);
    console.log('save product stickers');

    // console.log(productDescription);

    return result;
  }

  public async createProductCategory(vendorCode: string, productId: number) {
    const productParams = await this.getProductParams(vendorCode);
    const categoryRules = await this.categoryRulesService.getCategoryRulesList();

    const filter = categoryRules.filter(rule => {
      let result = true;

      if (rule.groupId) {
        result = result && rule.groupId === productParams.groupId;
      }

      if (rule.typeId) {
        result = result && rule.typeId === productParams.itemTypeId;
      }

      if (rule.genderId) {
        result = result && rule.genderId === productParams.sexId;
      }

      if (rule.fabricId) {
        result = result && rule.fabricId === productParams.fabricId;
      }

      if (rule.sizeId) {
        result = result && rule.sizeId === productParams.sizeId;
      }

      return result;
    });

    const categoryList = filter.map(category => ({
      productId: productId,
      categoryId: category.categoryId,
      inEs: IN_ES_TYPE.CREATE,
    }));

    return categoryList;
  }

  public async createProductAttributes(vendorCode: string, productId: number) {
    const productParams = await this.getProductParams(vendorCode);

    const atrributeValuesShort: attributeValueShortType[] = [];
    atrributeValuesShort.push(await this.createTypeDress(productParams));
    atrributeValuesShort.push(await this.createFabric(productParams));

    let value = await this.createSize(productParams);
    if (value) {
      atrributeValuesShort.push(value);
    }

    value = await this.createSizeDress(productParams);
    if (value) {
      atrributeValuesShort.push(value);
    }

    value = await this.createSizeHats(productParams);
    if (value) {
      atrributeValuesShort.push(value);
    }

    const valueArray = await this.createGender(productParams);
    atrributeValuesShort.push(...valueArray);

    const result = atrributeValuesShort.map(item => ({
      ...item,
      productId: productId,
      inEs: IN_ES_TYPE.CREATE,
    }));

    return result;
  }

  private async createGender(productParams: ProductParamsType): Promise<attributeValueShortType[]> {
    const gender = productParams.vendorCode.slice(6, 7);

    let result = [];
    if (gender === '0') {
      const boy = await this.attributeValueService.getAttributeValueByCondition({
        attributeId: ATTRIBUTE_VALUE.GENDER,
        inLCode: '1',
      });
      const girl = await this.attributeValueService.getAttributeValueByCondition({
        attributeId: ATTRIBUTE_VALUE.GENDER,
        inLCode: '2',
      });

      result.push({
        attributeId: ATTRIBUTE_VALUE.GENDER,
        attributeValueId: boy.id,
      });
      result.push({
        attributeId: ATTRIBUTE_VALUE.GENDER,
        attributeValueId: girl.id,
      });

      return result;
    }

    const value = await this.attributeValueService.getAttributeValueByCondition({
      attributeId: ATTRIBUTE_VALUE.GENDER,
      inLCode: gender,
    });

    result.push({
      attributeId: ATTRIBUTE_VALUE.GENDER,
      attributeValueId: value.id,
    });

    return result;
  }

  private async createColorOne(productParams: ProductParamsType): Promise<attributeValueShortType> {
    const attributeValue = await this.attributeValueService.getAttributeValueByCondition({
      attributeId: ATTRIBUTE_VALUE.COLOR_ONE,
      inLCode: productParams.vendorCode.slice(12, 13),
    });

    return attributeValue
      ? {
          attributeId: ATTRIBUTE_VALUE.COLOR_ONE,
          attributeValueId: attributeValue.id,
        }
      : null;
  }

  private async createSizeDress(
    productParams: ProductParamsType,
  ): Promise<attributeValueShortType> {
    const attributeValue = await this.attributeValueService.getAttributeValueByCondition({
      attributeId: ATTRIBUTE_VALUE.SIZE_DRESS,
      inLCode: productParams.vendorCode.slice(9, 11),
    });

    return attributeValue
      ? {
          attributeId: ATTRIBUTE_VALUE.SIZE_DRESS,
          attributeValueId: attributeValue.id,
        }
      : null;
  }

  private async createSizeHats(productParams: ProductParamsType): Promise<attributeValueShortType> {
    const attributeValue = await this.attributeValueService.getAttributeValueByCondition({
      attributeId: ATTRIBUTE_VALUE.SIZE_HATS,
      inLCode: productParams.vendorCode.slice(9, 11),
    });

    return attributeValue
      ? {
          attributeId: ATTRIBUTE_VALUE.SIZE_HATS,
          attributeValueId: attributeValue.id,
        }
      : null;
  }

  private async createSize(productParams: ProductParamsType): Promise<attributeValueShortType> {
    const attributeValue = await this.attributeValueService.getAttributeValueByCondition({
      attributeId: ATTRIBUTE_VALUE.SIZE,
      inLCode: productParams.vendorCode.slice(9, 11),
    });

    return attributeValue
      ? {
          attributeId: ATTRIBUTE_VALUE.SIZE,
          attributeValueId: attributeValue.id,
        }
      : null;
  }

  private async createFabric(productParams: ProductParamsType): Promise<attributeValueShortType> {
    const attributeValue = await this.attributeValueService.getAttributeValueByCondition({
      attributeId: ATTRIBUTE_VALUE.FABRIC,
      inLCode: productParams.vendorCode.slice(7, 9),
    });

    return attributeValue
      ? {
          attributeId: ATTRIBUTE_VALUE.FABRIC,
          attributeValueId: attributeValue.id,
        }
      : null;
  }

  private async createTypeDress(
    productParams: ProductParamsType,
  ): Promise<attributeValueShortType> {
    const attributeValue = await this.attributeValueService.getAttributeValueByCondition({
      attributeId: ATTRIBUTE_VALUE.TYPE_DRESS,
      inId: productParams.itemTypeId,
    });

    return attributeValue
      ? {
          attributeId: ATTRIBUTE_VALUE.TYPE_DRESS,
          attributeValueId: attributeValue.id,
        }
      : null;
  }

  public async createProductStickers(productId: number) {
    return this.productStickersService.createNewProductStickers(productId);
  }

  public async createProductDescription(
    vendorCode: string,
    productId: number,
  ): Promise<ProductDescriptionType[]> {
    const productParams = await this.getProductParams(vendorCode);
    const languageList = await this.languageService.getAll();

    const productDescriptionList = await Promise.all(
      languageList.map(async language => {
        const languageName = language.language;
        const languageId = language.id;

        const productDescription = await this.createDescriptionFromProduct(
          productParams,
          languageId,
        );

        const result = {
          productId: productId,
          language: languageName,
          name: productDescription.name,
          h1: productDescription.h1,
          metaTitle: productDescription.metaTitle,
          metaDescription: productDescription.metaDescription,
          metaKeyword: productDescription.metaKeyword,
          descriptionShort: productDescription.descriptionShort,
          description: productDescription.description,
          composition: productDescription.composition,
          care: '',
          searchKeyword: productDescription.searchKeyword,
          inEs: IN_ES_TYPE.CREATE,
        };

        return result;
      }),
    );

    return productDescriptionList;
  }

  private async createDescriptionFromProduct(productParams: ProductParamsType, languageId: number) {
    const paramsDescription = await Promise.all([
      this.getItemTypeByCode(productParams, languageId),
      this.getItemFabricDescription(productParams, languageId),
      this.getSizeDescription(productParams),
      this.getColorFirstDescription(productParams, languageId === 1 ? 2 : languageId),
      this.getColorCodeDescription(productParams, languageId),
      this.getFabricCompositionDescription(productParams, languageId),
      this.getGenderDescription(productParams, languageId),
    ]);

    const model = `${paramsDescription[0].description}${this.getModuleNumberFromCode(productParams.vendorCode.slice(2, 5))}`;

    let name = [paramsDescription[0].descriptionFull, model, paramsDescription[3].description].join(
      ' | ',
    );

    let h1 = [
      paramsDescription[0].descriptionFull,
      model,
      paramsDescription[1].description,
      `${languageId === 1 ? 'p' : 's'}.${paramsDescription[2].nmShort}`,
      paramsDescription[4].description,
    ]
      .join(', ')
      .toLowerCase();
    h1 = h1.charAt(0).toUpperCase() + h1.slice(1);

    const searchKeyword = h1;

    const metaTitle = [
      `${languageId === 1 ? 'Купити' : 'Buy'} ${model}`,
      paramsDescription[0].descriptionFull,
      paramsDescription[1].description,
      `${paramsDescription[6].description} | Bebmi`,
    ].join(', ');

    const result = {
      name,
      h1,

      metaTitle: metaTitle,
      metaDescription: metaTitle,
      metaKeyword: metaTitle,
      descriptionShort: metaTitle,
      description: metaTitle,

      searchKeyword,
      composition: paramsDescription[5].description,
    };

    return result;
  }

  private async getGenderDescription(
    productParams: ProductParamsType,
    languageId: number,
  ): Promise<GenderDescription> {
    const result = await this.genderDescriptionService.getGenderDescription(
      productParams.vendorCode.slice(6, 7),
      languageId,
    );

    return result[0] ?? new GenderDescription();
  }

  private getModuleNumberFromCode(modelNumber: string): string {
    if (modelNumber.slice(0, 2) === '00') {
      return modelNumber.slice(2);
    } else if (modelNumber.slice(0, 1) === '0') {
      return modelNumber.slice(1);
    }
    return modelNumber;
  }

  private async getFabricCompositionDescription(
    productParams: ProductParamsType,
    languageId: number,
  ): Promise<FabricCompositionDescription> {
    const conditions = {
      fabricCompositionId: productParams.fabricCompositionId,
      languageId,
    };

    const result =
      await this.fabricCompositionDescriptionService.getFabricCompositionDescription(conditions);
    return result[0] ?? new FabricCompositionDescription();
  }

  private async getColorCodeDescription(
    productParams: ProductParamsType,
    languageId: number,
  ): Promise<ColorCodeDescription> {
    const conditions = {
      code: productParams.vendorCode.slice(12, 15),
      languageId,
    };

    const colorCodeDescription = await this.colorCodeDescriptionService.getColorCodeDescription(
      conditions.code,
      conditions.languageId,
    );

    const result = colorCodeDescription[0] ?? new ColorCodeDescription();
    result.description = this.transformColorCodeDescription(result.description, languageId);

    return result;
  }

  private transformColorCodeDescription(description: string, languageId: number): string {
    const nameList = description.split(',');
    const nameTrimList = nameList.map(item => item.trim());
    const nameFilter = nameTrimList.filter(item => {
      switch (languageId) {
        case 1:
          if (item.toLowerCase() === 'неважливо') {
            return false;
          }
        case 2:
          if (item.toLowerCase() === 'unimportant') {
            return false;
          }
        case 3:
          if (item.toLowerCase() === 'nieważny') {
            return false;
          }
      }
      return true;
    });
    return nameFilter.join('-');
  }

  private async getColorFirstDescription(
    productParams: ProductParamsType,
    languageId: number,
  ): Promise<ColorFirstDescription> {
    const colorFirstDescription =
      await this.colorFirstDescriptionService.getColorFirstDescriptionByCode(
        productParams.vendorCode.slice(12, 13),
        languageId,
      );

    return colorFirstDescription[0] ?? new ColorFirstDescription();
  }

  private async getSizeDescription(productParams: ProductParamsType): Promise<Size> {
    const conditions = {
      id: productParams.sizeId,
    };

    const sizeDescription = await this.sizeService.getSize(conditions);

    return sizeDescription ?? new Size();
  }

  private async getItemFabricDescription(
    productParams: ProductParamsType,
    languageId: number,
  ): Promise<FabricDescription> {
    const conditions = {
      fabricId: productParams.fabricId,
      languageId,
    };

    const fabricDescriptionList =
      await this.fabricDescriptionService.getFabricDescription(conditions);

    return fabricDescriptionList[0] ?? new FabricDescription();
  }

  private async getItemTypeByCode(
    productParams: ProductParamsType,
    languageId: number,
  ): Promise<ItemTypeDescription> {
    const conditions = {
      itemTypeId: productParams.itemTypeId,
      languageId,
    };
    const itemTypeDescriptionList =
      await this.itemTypeDescriptionService.getItemTypeDescription(conditions);

    return itemTypeDescriptionList[0] ?? new ItemTypeDescription();
  }

  private async getProductParams(vendorCode: string): Promise<ProductParamsType> {
    const productParams = await this.modelItemSizeService.getModelItemSizeByVendorCode(vendorCode);

    const result = productParams ?? new ModelItemSize();
    result.vendorCode = vendorCode;

    return result;
  }

  private createProductItem(vendorCode: string, productId: number): Product {
    return {
      id: productId,
      model: this.getModelFromArticle(vendorCode),
      modelUnited: this.getModelUnitedFromArticle(vendorCode),
      modelUnitedAttribute: this.getModuleUnitedAttributeFromArticle(vendorCode),
      modelMainProduct: 0,
      mainCategoryId: 0, //TODO set this param
      image: GLOBAL_CONST.IMAGE,
      // youtube: null,
      price: 0, //TODO set this param
      quantity: 0,
      stockStatusId: STOCK_STATUS.NOT_AVAILABLE,
      status: STATUS.ON,
      inEs: IN_ES_TYPE.CREATE,
    } as Product;
  }

  private getModelFromArticle(vendorCode: string): string {
    return vendorCode;
  }

  private getModelUnitedFromArticle(vendorCode: string): string {
    return `R${vendorCode.slice(0, 9)}_${vendorCode.slice(12, 15)}`;
  }

  private getModuleUnitedAttributeFromArticle(vendorCode: string): string {
    return `R${vendorCode.slice(0, 9)}`;
  }
}
