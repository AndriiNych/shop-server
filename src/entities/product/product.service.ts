import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductResponseBaseDto } from './dto/product.response.base.dto';
import { SqlQuery } from '@src/util/sql-builder/sql-query';
import { QueryPipeDto } from '@src/util/pipe/api/query/query.pipe.dto';

type ProductType = Partial<InstanceType<typeof Product>>;
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  public async saveProduct(productList): Promise<Product[]> {
    const products = this.productRepository.create(productList);

    return await this.productRepository.save(products);
  }

  public async updateProductById(id: number, data: ProductType) {
    return await this.productRepository.update({ id }, data);
  }

  public async getMaxProductId(): Promise<number> {
    const sqlQuery = new SqlQuery();

    sqlQuery.select(['max(id) as maxId']).from('sw_product');

    const result = await sqlQuery.setDataSource(this.dataSource).getMany();

    return result[0]?.maxId || 0;
  }

  public async getAllProductList(): Promise<ProductResponseBaseDto[]> {
    return await this.productRepository.find();
  }

  public async getProductList(conditions): Promise<Product[]> {
    return await this.productRepository.find({ where: conditions });
  }

  public async getAllProductListOnlyMainItems(queryPipeDto: QueryPipeDto) {
    const { pagination, sort, filters } = queryPipeDto;

    const sqlQuery = new SqlQuery();

    const sqlProductDescription = '(SELECT * FROM sw_product_description WHERE language = :lang)';

    const sqlCategoryDescription = '(SELECT * FROM sw_category_description WHERE language = :lang)';

    sqlQuery
      .select(['p.id AS id', 'pd.name AS product_name', 'cd.name AS category_name'])
      .from(
        '(SELECT id, main_category_id, model_main_product FROM sw_product WHERE model_main_product = :active GROUP BY model_united_attribute) p',
      )
      .addJoin('LEFT', sqlProductDescription, 'pd', 'pd.product_id = p.id')
      .addJoin('LEFT', sqlCategoryDescription, 'cd', 'cd.category_id = p.main_category_id')
      .andWhere('pd.name <> :name')
      .addParameters({
        active: 1,
        lang: 'uk',
        name: ' ',
      })
      .setFilters(filters)
      .setSorting(sort, [{ _sort: 'cd.name' }, { _sort: 'pd.name' }])
      .setPagination(pagination);

    const { data, total } = await sqlQuery.setDataSource(this.dataSource).getManyAndCount();

    return [data, total];
  }
}
