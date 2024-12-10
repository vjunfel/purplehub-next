import React from 'react';
import MenuCard from '@/components/MenuCard';
import { menuData } from '@/constants';

function MenuPage() {
	return (
		<div className="pt-[120px] w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 from-10% via-purple-700 via-50% to-purple-950">
			<h1 className="my-10 text-4xl text-white">Our Products</h1>
			
			<div className='flex md:flex-row flex-col items-center justify-evenly gap-2 md:gap-12 mb-20 w-full max-w-screen-2xl text-gray-100 p-4 rounded-lg'>
				<div className='flex flex-col gap-2'>
					<p><span className='text-green-600'>✔</span> ORGANIC UBE farmed by local farmers</p>
					<p><span className='text-green-600'>✔</span> NO added preservatives</p>
					<p><span className='text-green-600'>✔</span> PREMIUM quality ingredients</p>
				</div>
				<div className='flex flex-col gap-2'>
					<p><span className='text-green-600'>✔</span> HAND-GRATED Ube for perfect texture</p>
					<p><span className='text-green-600'>✔</span> FRESHLY baked everyday</p>
					<p><span className='text-green-600'>✔</span> Made with lots of LOVE <span className='text-red-700'> ♥ </span></p>
				</div>
			</div>
			
			<ul className="columns-1 lg:columns-2 xl:columns-3 gap-12 pb-16 px-4 md:px-6 lg:px-10">
				{menuData.map((item, index) => (
					<li
						key={index}
						className="relative bg-white py-4 border overflow-hidden w-full md:w-[420px] h-[460px] flex flex-col items-center justify-between mb-10 rounded-xl"
					>
						{item.category === 'new' && 
							<span className="absolute top-8 right-10 transform translate-x-1/2 -translate-y-1/2 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
								New
							</span>
						}
						{item.category === 'best-seller' && 
							<span className="absolute top-8 right-10 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
								Hot
							</span>
						}
						
						<MenuCard
							imgSrc={item.imgSrc}
							alt={item.alt}
							width={300}
							height={300}
						/>
						<div className='flex flex-col items-end justify-start h-40 p-6'>
							<h3 className="w-full text-2xl text-start mb-4 ">{item.name}</h3>
							<p className="text-md">{item.description}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default MenuPage;
