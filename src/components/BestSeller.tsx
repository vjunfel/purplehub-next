"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MenuCard from '@/components/MenuCard';
import { bestSeller } from '@/constants';

const BestSeller = () => {
  const router = useRouter();

  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Best Sellers</h2>
        <Link href='/menu'>
          <span className='text-gray-900 text-lg hover:text-purple-700'>View All</span>
        </Link>
      </div>
      
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-12">
        {bestSeller.map((item, index) => (
          <li
            key={index}
            className="relative bg-white py-4 border overflow-hidden w-full h-[460px] flex flex-col items-center justify-between rounded-xl mb-6 group cursor-pointer"
            onClick={() => router.push(`/menu/${item.slug}`)}
          >
            <div className="relative overflow-hidden">
              <MenuCard
                src={item.imgSrc}
                alt={item.alt}
                width={300}
                height={300}
                className="transition-scale duration-200 group-hover:scale-110"
              />
            </div>
						<div className="w-full absolute bottom-[-160px] group-hover:bottom-0 h-40 flex items-center justify-center group-hover:opacity-100 transition-position duration-200 bg-purple-700 bg-opacity-90 text-white text-xl z-20">
							More Info
						</div>
            <div className='flex flex-col items-end justify-start h-40 p-6'>
              <h3 className="w-full text-2xl text-start mb-4">{item.name}</h3>
              <p className="text-md">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSeller;