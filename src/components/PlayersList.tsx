import { Player } from '../types/Player';
import List from './List';
import PlayerItem from './PlayerItem';

interface IProps {
    players: Array<Player>;
    favorites: Array<Player>;
}

export default function PlayersList({ players, favorites }: IProps) {
    return (
        <List className='max-h-full h-full p-3 overflow-y-auto'>
            {players.map((player) => (
                <>
                    <PlayerItem
                        key={player.id}
                        player={player}
                        isFavorite={favorites.includes(player)}
                        image={`../../assets/${player.team.name}.png`}
                    />
                    <hr className='w-full border-black-100 border-1 border-solid' />
                </>
            ))}
        </List>
    );
}
