import { Player } from './Player';

export type serverResponse = {
    data: Array<Player>;
    meta: MetaData;
};

export type MetaData = {
    totalPages: number;
    currentPage: number;
    nextPage: number;
    perPage: number;
    totalCount: number;
};
