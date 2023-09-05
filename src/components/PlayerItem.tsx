import { useContext } from 'react';
import { Player } from '../types/Player';
import DynamicAvatar from './DynamicAvatar';
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';
import { FavoritesContext } from '../App';

interface IProps {
    player: Player;
    isFavorite: boolean;
    image: string;
    className?: string;
}

export default function PlayerItem({
    player,
    isFavorite,
    image,
    className,
}: IProps) {
    const { onSelectFav, onDeleteFav } = useContext(FavoritesContext)!;

    return (
        <li className={`${className} flex flex-col p-2 text-lg`}>
            <div className='flex justify-between'>
                <div className='flex'>
                    <DynamicAvatar
                        className='mr-5'
                        image={image}
                        fallbackImage='../../assets/nba.png'
                    />
                    <div className='flex flex-col items-start'>
                        <span>{`${player.firstName} ${player.lastName}`}</span>
                        <span className='mt-2'>{player.team.name}</span>
                    </div>
                </div>
                {isFavorite ? (
                    <button
                        className='h-max'
                        onClick={() => onDeleteFav(player.id)}>
                        <Star style={{ color: '#FFCA28' }} />
                    </button>
                ) : (
                    <button
                        className='h-max'
                        onClick={() => onSelectFav(player)}>
                        <StarBorder style={{ color: '#FFCA28' }} />
                    </button>
                )}
            </div>
        </li>
    );
}
