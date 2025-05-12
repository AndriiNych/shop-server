export const FIELDS_LENGTH = {
  INT: {
    BASE: 11,
  },

  DECIMAL: {
    PRECISION: 15,
    SCALE: 4,
  },

  VARCHAR: {
    LANGUAGE: 6,
    SMALL: 10,
    SHORT: 64,
    BASE: 255,
    LONG: 512,
  },
};

export const FIELDS_DEFAULT_VALUE = {
  IMAGE: 'blank_logo.jpg',
  LANGUAGE: 'uk',
  NUMBDER: 0,
  TEXT: '',
  DATE: () => 'CURRENT_TIMESTAMP',
};

const DATE_SHABLON = {
  DATE: {
    type: 'datetime' as const,
    nullable: true,
    default: FIELDS_DEFAULT_VALUE.DATE,
  },
  DATE_UPDATE: {
    type: 'datetime' as const,
    nullable: true,
    default: FIELDS_DEFAULT_VALUE.DATE,
    onUpdate: 'CURRENT_TIMESTAMP',
  },
};

export const FIELDS = {
  KEY: {
    type: 'int' as const,
    width: FIELDS_LENGTH.INT.BASE,
    default: FIELDS_DEFAULT_VALUE.NUMBDER,
    nullable: true,
  },

  NUMBER: {
    type: 'int' as const,
    width: 4,
    default: FIELDS_DEFAULT_VALUE.NUMBDER,
    nullable: true,
  },

  SMALINT: {
    type: 'smallint' as const,
    width: 1,
    default: FIELDS_DEFAULT_VALUE.NUMBDER,
    nullable: true,
  },

  DECIMAL: {
    type: 'decimal' as const,
    precision: FIELDS_LENGTH.DECIMAL.PRECISION,
    scale: FIELDS_LENGTH.DECIMAL.SCALE,
    nullable: true,
    default: FIELDS_DEFAULT_VALUE.NUMBDER,
    collation: 'utf8_general_ci',
  },

  LANGUAGE: {
    type: 'varchar' as const,
    length: FIELDS_LENGTH.VARCHAR.LANGUAGE,
    default: FIELDS_DEFAULT_VALUE.LANGUAGE,
    collation: 'utf8_general_ci',
  },

  TEXT_SMALL: {
    type: 'varchar' as const,
    length: FIELDS_LENGTH.VARCHAR.SMALL,
    nullable: true,
    default: FIELDS_DEFAULT_VALUE.TEXT,
    collation: 'utf8_general_ci',
  },

  TEXT_SHORT: {
    type: 'varchar' as const,
    length: FIELDS_LENGTH.VARCHAR.SHORT,
    nullable: true,
    default: FIELDS_DEFAULT_VALUE.TEXT,
    collation: 'utf8_general_ci',
  },

  TEXT_DEFAULT: {
    type: 'varchar' as const,
    length: FIELDS_LENGTH.VARCHAR.BASE,
    nullable: true,
    default: FIELDS_DEFAULT_VALUE.TEXT,
    collation: 'utf8_general_ci',
  },

  TEXT_BIG: {
    type: 'varchar' as const,
    length: FIELDS_LENGTH.VARCHAR.LONG,
    nullable: true,
    default: FIELDS_DEFAULT_VALUE.TEXT,
    collation: 'utf8_general_ci',
  },

  TEXT_MEMO: {
    type: 'text' as const,
    nullable: true,
    default: FIELDS_DEFAULT_VALUE.TEXT,
    collation: 'utf8_general_ci',
  },

  DATE: { ...DATE_SHABLON.DATE },

  DATE_UPDATE: { ...DATE_SHABLON.DATE_UPDATE },

  CREATE_AT: {
    ...DATE_SHABLON.DATE,
  },

  UPDATED_AT: {
    ...DATE_SHABLON.DATE_UPDATE,
  },
};
