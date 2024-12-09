import Image from 'next/image';
import React from 'react';

interface MenuCardProps {
	imgSrc: string;
	alt: string;
	width: number;
	height: number;
}

const MenuCard: React.FC<MenuCardProps> = ({
	imgSrc,
	alt,
	width,
	height,
}) => {
	return (
		<div className="bg-white h-[300px] overflow-hidden ">
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
