import { Injectable } from '@nestjs/common';
import { viewTable } from '@src/util/api-site/view-tables';
import { NewSiteBodyDto } from './dto/new-site.body.dto';

@Injectable()
export class NewSiteService {
  async getDataFromLocalDb(bodyNewSite: NewSiteBodyDto): Promise<any> {
    const { tables } = bodyNewSite;
    const result = [];
    if (tables && tables.length > 0) {
      for (let idx = 0; idx < tables.length; idx++) {
        result.push(await viewTable(tables[idx]));
      }
    }
    return result;
  }
}
