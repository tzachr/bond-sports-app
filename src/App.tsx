import {
    useState,
    useEffect,
    useCallback,
    createContext,
    useMemo,
} from 'react';
import axios from 'axios';
import convertKeysToCamelCase from './utils/serverToClientData';
import { Player } from './types/Player';
import { MetaData, serverResponse } from './types/ServerData';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import './App.css';

export const FavoritesContext = createContext<{
    onSelectFav: (player: Player) => void;
    onDeleteFav: (id: number) => void;
} | null>(null);

function App() {
    const [players, setPlayers] = useState(Array<Player>);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [favorites, setFavorites] = useState(Array<Player>);

    const fetchPlayers = async (url: string) => {
        try {
            const { data: response } = await axios.get<serverResponse>(url);
            const players = response.data.map(
                (item: any) => convertKeysToCamelCase(item) as Player
            );
            const meta = convertKeysToCamelCase(response.meta) as MetaData;
            setPlayers(players);
            setPage(meta.currentPage);
            setPages(meta.totalPages);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPlayers(`/players?page=${page}`);
    }, [page]);

    const fetchPage = (page: number) => setPage(page);

    const handleSearch = useCallback((search: string) => {
        fetchPlayers(`/players?search=${search}`);
    }, []);

    const onSelectFav = useCallback(
        (player: Player) => {
            if (!favorites.some((fav) => fav.id === player.id)) {
                setFavorites([...favorites, player]);
            }
        },
        [favorites]
    );

    const onDeleteFav = useCallback(
        (id: number) => {
            setFavorites(favorites.filter((fav) => fav.id !== id));
        },
        [favorites]
    );

    const contextValue = useMemo(
        () => ({ onSelectFav, onDeleteFav }),
        [onSelectFav, onDeleteFav]
    );

    return (
        <div className='text-center flex justify-around items-center h-screen w-screen bg-gradient-to-tr from-[#17408B] to-50% from-50% to-[#C9082A]'>
            <FavoritesContext.Provider value={contextValue}>
                <LeftSide
                    players={players}
                    favorites={favorites}
                    pagesCount={pages}
                    handleSearch={handleSearch}
                    onFetchPage={fetchPage}
                />
                <RightSide favorites={favorites} />
            </FavoritesContext.Provider>
        </div>
    );
}

export default App;
