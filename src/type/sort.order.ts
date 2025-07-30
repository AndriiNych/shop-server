export type SortOrder = 'ASC' | 'DESC';

export type SortingArray = Array<
  Partial<{
    _sort: string;
    _order: SortOrder;
  }>
>;
