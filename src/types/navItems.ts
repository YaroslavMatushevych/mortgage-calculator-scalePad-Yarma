import { navListData } from '@/constant/mockData';

export type NavListDataType = typeof navListData;

type InferItemType<T> = T extends (infer U)[] ? U : never;
export type NavListItemType = InferItemType<NavListDataType>;
