import PaletteIcon from '@mui/icons-material/Palette';
import { ColorResult, SketchPicker } from 'react-color';
import { Player } from '../types/Player';
import PlayersList from './PlayersList';
import { useState } from 'react';

interface IProps {
    favorites: Array<Player>;
    backgroundColor: string;
    onColorChange: (color: ColorResult) => void;
}

export default function Favorites({
    favorites,
    backgroundColor,
    onColorChange,
}: IProps) {
    const [isPikerOpen, setIsPikerOpen] = useState(false);

    return (
        <div className='relative flex flex-col h-full'>
            <div className='flex'>
                <button
                    className='justify-self-start h-fit'
                    onClick={() => setIsPikerOpen(!isPikerOpen)}>
                    <PaletteIcon />
                </button>
                {isPikerOpen && (
                    <SketchPicker
                        className='absolute top-5 left-5 z-10'
                        color={backgroundColor}
                        onChangeComplete={onColorChange}
                    />
                )}
                <h1 className='text-2xl pb-4 ml-auto mr-auto'>My All Stars</h1>
            </div>
            <PlayersList players={favorites} favorites={favorites} />
        </div>
    );
}
