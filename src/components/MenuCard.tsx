import Image from 'next/image';
import React from 'react';

interface MenuCardProps {
	src: string;
	alt: string;
	width: number;
	height: number;
	className: string
}

const MenuCard: React.FC<MenuCardProps> = ({
	src,
	alt,
	width,
	height,
	className,
}) => {
	return (
		<div className={`bg-white h-[300px] overflow-hidden ${className}`}>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
			/>
		</div>
	);
};

export default MenuCard;
