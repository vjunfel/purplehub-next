'use client';
import Image from 'next/image'
import React from 'react'
import notFound from '../../../public/images/not-found.svg'
import { useRouter } from 'next/navigation';

function NotFound() {
	const router = useRouter();
	return (
		<div className='bg-gradient-to-r from-purple-500 from-10% via-purple-700 via-50% to-purple-950 text-white px-4 lg:p-0'>
			<div className='pt-[80px] lg:pt-[160px] w-full max-w-screen-xl mx-auto min-h-screen flex justify-center items-center flex-col '>
				<Image src={notFound} alt="cake" width={300}  className='lg:h-auto rounded-md' />
				<h2 className="my-10 text-5xl ">Item Not Found</h2>
				<button
					onClick={() => router.back()}
					className="mb-4 text-purple-100 hover:text-purple-300"
				>
					&larr; Go Back
				</button>
			</div>
		</div>
	)
}

export default NotFound