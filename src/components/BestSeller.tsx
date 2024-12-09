import React from 'react'
import Link from 'next/link';
import { menuData } from '@/constants';
import MenuCard from './MenuCard';

const BestSeller = () => {
  const bestSeller = menuData.filter(item => item.category === 'best-seller')
  
  return (
    <div className="bg-violet-50 w-full text-gray-900 flex flex-col justify-center items-center py-20 px-4 md:px-10">
      <div className='w-full max-w-screen-xl flex items-center justify-between mb-10'>
			  <h1 className=" text-4xl font-bold-lg text-gray-700 text-start">Best Seller</h1>
        <Link href='/menu'>
          <span className='text-lg hover:text-purple-700'>View All</span>
        </Link>
      </div>
			
			<ul className="columns-1 lg:columns-2 xl:columns-3 gap-12">
				{bestSeller.map((item, index) => (
					<li
						key={index}
						className="relative bg-white py-4 border overflow-hidden w-[400px] h-[460px] flex flex-col items-center justify-between rounded-xl mb-6"
					>
						<span className="absolute top-8 right-10 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
							Hot
						</span>
						
							<MenuCard
								imgSrc={item.imgSrc}
								alt={item.alt}
								width={300}
								height={300}
							/>
            
						<div className='flex flex-col items-end justify-start  p-6'>
							<h3 className="w-full text-2xl text-start mb-4 ">{item.name}</h3>
							<p className="text-md">{item.description}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
  )
}

export default BestSeller