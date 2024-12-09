import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import heroImage from '../../public/images/hero_img.png'

const Hero: React.FC = () => {
	return (
		<div className="max-w-screen-2xl flex lg:flex-col md:px-10 px-5 w-full">
			<div className='flex flex-col md:flex-row gap-16  w-full py-20 md:px-16 rounded-3xl'>
				<div className="flex flex-col flex-1 gap-10 justify-center">
					<h2 className="font-[family-name:var(--font-marck-script)] text-3xl lg:text-5xl text-purple-900 ">
						Baked with premium ingredients with just the right sweetness.
					</h2>
					<div className='flex flex-col gap-2'>
						<p><span className='text-green-600'>✔</span> ORGANIC UBE farmed by local farmers</p>
						<p><span className='text-green-600'>✔</span> NO added preservatives</p>
						<p><span className='text-green-600'>✔</span> PREMIUM quality ingredients</p>
						<p><span className='text-green-600'>✔</span> HAND-GRATED Ube for perfect texture</p>
						<p><span className='text-green-600'>✔</span> FRESHLY baked everyday</p>
						<p><span className='text-green-600'>✔</span> Made with lots of LOVE <span className='text-red-700'> ♥ </span></p>
					</div>
					
					<Link href="/contact" className='w-fit'>
						<button className="py-2 px-4 bg-purple-950 hover:bg-purple-800 text-white rounded">
							ORDER NOW
						</button>
					</Link>
				</div>
				<div className="flex-1 flex md:justify-end justify-center">
					<Image
						src={heroImage}
						alt="cake"
						className='md:w-[300px] md:h-[350px] lg:w-[446px] lg:h-[505px]'
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
