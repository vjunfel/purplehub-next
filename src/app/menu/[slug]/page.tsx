"use client";
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { menuData } from '@/constants';

export default function ProductPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug;

  const product = menuData.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-red-500 text-2xl mb-4">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4 bg-gradient-to-r from-purple-500 from-10% via-purple-700 via-50% to-purple-950">
      <button
        onClick={() => router.back()}
        className="mb-4 text-purple-700 hover:text-purple-900"
      >
        &larr; Go Back
      </button>
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center p-6 rounded shadow-md bg-white">
        <img
          src={product.imgSrc}
          alt={product.alt}
          className="w-full md:w-1/2 h-auto object-cover mb-4 md:mb-0"
        />
        <div className="md:ml-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl text-gray-900">Price: ₱{product.price}</p>
        </div>
      </div>
    </div>
  );
}