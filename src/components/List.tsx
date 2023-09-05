import { ReactNode } from 'react';

export default function List({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) {
    return <ul className={className}>{children}</ul>;
}
