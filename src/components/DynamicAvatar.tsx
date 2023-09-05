import { Avatar } from '@mui/material';

interface IProps {
    image: string;
    fallbackImage: string;
    className: string;
}

export default function DynamicAvatar({
    image,
    fallbackImage,
    className,
}: IProps) {
    return (
        <Avatar
            className={className}
            src={image}
            alt='Dynamic avatar'
            onError={(e) =>
                ((e.target as HTMLImageElement).src = fallbackImage)
            }>
            <Avatar src={fallbackImage} />
        </Avatar>
    );
}
