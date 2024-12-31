import React from 'react';
import Image from 'next/image';

interface MenuCardProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    title: string;
    description: string;
}

const MenuCard: React.FC<MenuCardProps> = React.memo(({
    src,
    alt,
    width,
    height,
    className = '',
    title,
    description,
}) => {
    return (
        <div className={`bg-white h-[300px] overflow-hidden shadow-lg rounded-lg ${className}`} aria-label={title}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="rounded-t-lg"
                onError={(e) => (e.currentTarget.src = '/fallback-image.png')}
            />
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
});

export default MenuCard;
