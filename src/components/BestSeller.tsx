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
          <span className='text-white text-lg hover:text-purple-300'>View All</span>
        </Link>
      </div>
      
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {bestSeller.map((item, index) => (
          <li
            key={index}
            className="relative bg-white py-4 border overflow-hidden w-full h-[460px] flex flex-col items-center justify-between rounded-xl mb-6 group cursor-pointer"
            onClick={() => router.push(`/menu/${item.slug}`)}
          >
            <span className="absolute top-8 right-10 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Hot
            </span>
            
            <div className="relative overflow-hidden">
              <MenuCard
                src={item.imgSrc}
                alt={item.alt}
                width={300}
                height={300}
                className="transition-opacity duration-300 group-hover:opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40 text-white text-xl">
                View More
              </div>
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