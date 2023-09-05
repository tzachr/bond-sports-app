import { TextField, ThemeProvider, createTheme } from '@mui/material';
import { debounce } from '@mui/material/utils';

interface IProps {
    className?: string;
    debounceTime?: number;
    onChange: (search: string) => void;
}

const theme = createTheme({
    typography: {
        fontFamily: ['satisfy', 'sans-serif'].join(','),
    },
});

export default function SearchBar({
    className,
    debounceTime = 400,
    onChange,
}: IProps) {
    const handleChange = debounce((newValue: string) => {
        onChange(newValue);
    }, debounceTime);

    const handleInputChange = (event: any) => {
        const newValue = event.target.value;
        handleChange(newValue);
    };

    return (
        <div className={className}>
            <ThemeProvider theme={theme}>
                <TextField
                    id='player search'
                    label='Search for players'
                    type='search'
                    sx={{ width: 300 }}
                    onChange={handleInputChange}
                />
            </ThemeProvider>
        </div>
    );
}
