'use client';
import Image from 'next/image';
import React from 'react';
import notFound from '../../../../public/images/not-found.svg';
import { useRouter } from 'next/navigation';

function NotFound() {
	const router = useRouter();
	return (
		<div className="pt-[80px] lg:pt-[160px] w-full max-w-screen-xl mx-auto min-h-screen flex justify-center items-center flex-col ">
			<Image
				src={notFound}
				alt="cake"
				width={300}
				className="lg:h-auto rounded-md"
			/>
			<h2 className="my-10 text-5xl ">Item Not Found</h2>
			<button
				onClick={() => router.back()}
				className=" text-purple-700 hover:text-purple-900 pt-12 lg:pt-2"
			>
				&larr; Go Back
			</button>
		</div>
	);
}

export default NotFound;
