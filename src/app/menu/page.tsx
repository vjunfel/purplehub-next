import React from 'react';
import MenuCard from '@/components/MenuCard';
import { menuData } from '@/constants';

function MenuPage() {
	return (
		<div className="pt-[80px] bg-violet-50 w-full min-h-screen text-gray-900 flex flex-col justify-center items-center">
			<h1 className="my-10 text-4xl text-gray-700">Our Products</h1>
			
			<ul className="columns-1 md:columns-2 lg:columns-2 xl:columns-3 gap-12 mb-16">
				{menuData.map((item, index) => (
					<li
						key={index}
						className="bg-white py-4 border overflow-hidden w-[400px] h-[460px] flex flex-col items-center justify-between mb-10 rounded-xl"
					>
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
