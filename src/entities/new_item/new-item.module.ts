import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NewItem } from './new-item.entity';
import { NewItemService } from './new-item.service';
import { NewItemController } from './new-item.controller';
import { LanguageModule } from '../language/language.module';
import { ProductModule } from '../product/product.module';
import { ModuleItemSizeModule } from '../model-item-size/model-item-size.module';
import { ItemTypeDescriptionModule } from '../item-type-description/item-type-description.module';
import { FabricDescriptionModule } from '../fabric-description/fabric-description.module';
import { SizeModule } from '../size/size.module';
import { ColorFirstDescriptionModule } from '../color-first-description/color-first-description.module';
import { ColorCodeDescriptionModule } from '../color-code-description/color-code-description.module';
import { FabricCompositionDescriptionModule } from '../fabric-composition-description/fabric-composition-description.module';
import { GenderDescriptionModule } from '../gender-description/gender-description.module';
import { ProductStickersModule } from '../product-stikers/product-stikers.module';
import { AttributeValueModule } from '../attribute-value/attribute-value.module';
import { CategoryRulesModule } from '../category-rules/category-rules.module';
import { ProductDescriptionModule } from '../product-description/product-description.module';
import { ProductAttributesModule } from '../product-attributes/product-attributes.module';
import { ProductCategoryModule } from '../product-category/product-category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([NewItem]),

    AttributeValueModule,
    CategoryRulesModule,
    ColorFirstDescriptionModule,
    ColorCodeDescriptionModule,
    ItemTypeDescriptionModule,
    FabricCompositionDescriptionModule,
    FabricDescriptionModule,
    GenderDescriptionModule,
    LanguageModule,
    ModuleItemSizeModule,
    ProductAttributesModule,
    ProductCategoryModule,
    ProductDescriptionModule,
    ProductModule,
    ProductStickersModule,
    SizeModule,
  ],
  controllers: [NewItemController],
  providers: [NewItemService],
  exports: [NewItemService],
})
export class NewItemModule {}
