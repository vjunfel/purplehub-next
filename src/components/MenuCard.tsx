import Image from 'next/image';
import React from 'react';

interface MenuCardProps {
	imgSrc: string;
	alt: string;
	width: number;
	height: number;
	className: string;
}

const MenuCard: React.FC<MenuCardProps> = ({
	imgSrc,
	alt,
	width,
	height,
	className,
}) => {
	return (
		<div className={className}>
			<Image
				src={imgSrc}
				alt={alt}
				width={width}
				height={height}
			/>
		</div>
	);
};

export default MenuCard;
