import { Controller } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/const-tables';
import { getPoint } from '@src/util/api-site/get.point';
import { LanguageService } from './language.service';

@Controller(getPoint(TABLE_NAMES.language))
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}
}
