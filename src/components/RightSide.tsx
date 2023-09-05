import { Paper } from '@mui/material';
import { ColorResult } from 'react-color';
import { Player } from '../types/Player';
import Favorites from './Favorites';
import { useState } from 'react';

interface IProps {
    favorites: Array<Player>;
}

export default function RightSide({ favorites }: IProps) {
    const [bgColor, setBgColor] = useState('#ffffff');
    const handleColorChange = (color: ColorResult) => setBgColor(color.hex);

    return (
        <Paper
            className='h-9/10 w-4/12 flex flex-col p-4'
            elevation={24}
            style={{ backgroundColor: bgColor }}>
            <Favorites
                favorites={favorites}
                backgroundColor={bgColor}
                onColorChange={handleColorChange}
            />
        </Paper>
    );
}
