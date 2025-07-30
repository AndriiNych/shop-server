import { Module } from '@nestjs/common';

import { ConfigModule } from './config.module';
import { ConfigModule as ConfigModuleRoot } from '@nestjs/config';
import { NewSiteModule } from './entities/new-site/new-site.module';
import { TypeOrmModule } from './db/wrapper.typeorm.module';
import { UserModule } from './entities/user/user.module';
import { CategoryModule } from './entities/category/category.module';
import { ProjectSchedulerModule } from './project-scheduler/project-scheduler.module';
import { TaskModule } from './entities/task/task.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ProductModule } from './entities/product/product.module';
import { ColorFirstModule } from './entities/color-first/color-first.module';
import { ColorFirstDescriptionModule } from './entities/color-first-description/color-first-description.module';
import { Color3Module } from './entities/color-3/color-3.module';
import { Color3DescriptionModule } from './entities/color-3-description/color-3-description.module';
import { ColorCodeModule } from './entities/color-code/color-code.module';
import { AttributeValueModule } from './entities/attribute-value/attribute-value.module';
import { AttributeValueDescriptionModule } from './entities/attribute-value-description/attribute-value-description.module';
import { LanguageModule } from './entities/language/language.module';
import { ModuleItemSizeModule } from './entities/model-item-size/model-item-size.module';
import { ItemTypeDescriptionModule } from './entities/item-type-description/item-type-description.module';
import { FabricDescriptionModule } from './entities/fabric-description/fabric-description.module';
import { ColorCodeDescriptionModule } from './entities/color-code-description/color-code-description.module';
import { FabricCompositionDescriptionModule } from './entities/fabric-composition-description/fabric-composition-description.module';
import { GenderDescriptionModule } from './entities/gender-description/gender-description.module';
import { NewItemModule } from './entities/new_item/new-item.module';
import { ProductStickersModule } from './entities/product-stikers/product-stikers.module';
import { CategoryRulesModule } from './entities/category-rules/category-rules.module';
import { ProductDescriptionModule } from './entities/product-description/product-description.module';
import { ProductAttributesModule } from './entities/product-attributes/product-attributes.module';
import { ProductCategoryModule } from './entities/product-category/product-category.module';
import { PhotoUpdateModule } from './entities/photo-update/photo-update.module';

@Module({
  imports: [
    ConfigModuleRoot.forRoot(),
    ScheduleModule.forRoot(),
    ProjectSchedulerModule,
    ConfigModule,
    TypeOrmModule,
    AttributeValueModule,
    AttributeValueDescriptionModule,
    CategoryModule,
    CategoryRulesModule,
    Color3Module,
    Color3DescriptionModule,
    ColorCodeDescriptionModule,
    ColorCodeModule,
    ColorFirstModule,
    ColorFirstDescriptionModule,
    ItemTypeDescriptionModule,
    FabricCompositionDescriptionModule,
    FabricDescriptionModule,
    GenderDescriptionModule,
    LanguageModule,
    ModuleItemSizeModule,
    NewItemModule,
    NewSiteModule,
    PhotoUpdateModule,
    ProductAttributesModule,
    ProductCategoryModule,
    ProductDescriptionModule,
    ProductModule,
    ProductStickersModule,
    TaskModule,
    UserModule,
  ],
})
export class AppModule {}
