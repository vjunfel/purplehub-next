import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Hero: React.FC = () => {
	return (
		<div className="flex flex-col md:flex-row py-20 gap-16 md:px-16">
			<div className="flex flex-col flex-1 gap-10 justify-center">
				<p className="font-[family-name:var(--font-marck-script)] text-5xl text-purple-900">
					Baked with premium ingredients with just the right sweetness.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
					accusantium iusto? Accusamus quos quidem perspiciatis facere
					inventore delectus ipsam ea?
				</p>
        <Link href="/contact">
				<button className="py-2 px-4 bg-purple-900 text-white w-fit rounded">
					ORDER NOW
				</button>
        </Link>
			</div>
      
			<div className='flex-1'>
				<Image
					src="/images/hero_img.png"
					alt="logo"
					width={505}
					height={446}
					className="width-auto"
				/>
			</div>
		</div>
	)
}

export default Hero;
