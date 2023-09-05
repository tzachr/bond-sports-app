import { Pagination, Paper } from '@mui/material';
import SearchBar from './Searchbar';
import PlayersList from './PlayersList';
import { Player } from '../types/Player';

interface IProps {
    players: Array<Player>;
    favorites: Array<Player>;
    pagesCount: number;
    onFetchPage: (page: number) => void;
    handleSearch: (search: string) => void;
}

export default function LeftSide({
    players,
    favorites,
    pagesCount,
    handleSearch,
    onFetchPage,
}: IProps) {
    return (
        <Paper className='h-9/10 w-4/12 p-4 flex flex-col' elevation={24}>
            <SearchBar className='mb-2' onChange={handleSearch} />
            <PlayersList players={players} favorites={favorites} />
            <Pagination
                className='pt-4'
                count={pagesCount}
                onChange={(e, page) => onFetchPage(page)}
            />
        </Paper>
    );
}
