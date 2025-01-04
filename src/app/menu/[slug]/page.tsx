'use client';
import React from 'react';
import { useRouter, useParams, notFound } from 'next/navigation';
import { menuData } from '@/constants';
import Image from 'next/image';

export default function ProductInfo() {
	const router = useRouter();
	const params = useParams();
	const slug = params.slug;

	const product = menuData.find((item) => item.slug === slug);

	if (!product) {
    notFound();
	}

	return (
		<div className="px-4 md:px-8 lg:px-12">
			<div className="w-full flex flex-col justify-between items-center pb-20 pt-[80px] lg:pt-[180px]">
				<div className=" max-w-sm md:max-w-md lg:max-w-6xl w-full flex flex-col gap-4 md:gap-8 xl:gap-28 lg:flex-row items-center">
					<Image
						src={product.imgSrc}
						alt={product.alt}
						width={600}
						height={600}
						className="flex-1 w-full object-cover md:mb-0"
					/>
					<div className="w-full h-full flex-1  flex flex-col justify-center">
						<h1 className="text-4xl font-bold mb-4 text-gray-900">
							{product.name}
						</h1>
						<p className="text-lg text-gray-700 mb-8">
							{product.description}
						</p>
						<p className="text-2xl text-gray-900">
							Price: &nbsp;<strong>₱{product.price}</strong>
						</p>
					</div>
				</div>

				<button
					onClick={() => router.back()}
					className=" text-purple-700 hover:text-purple-900 pt-12 lg:pt-2"
				>
					&larr; Go Back
				</button>
			</div>
		</div>
	);
}
