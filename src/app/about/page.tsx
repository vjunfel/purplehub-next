import React from 'react'
import Image from 'next/image'
import { aboutData } from '@/constants'
import aboutPic from '../../../public/images/about-pic.jpg'

const AboutPage: React.FC = () => {
	return (
		<div className='bg-gradient-to-r from-purple-500 from-10% via-purple-700 via-50% to-purple-950 text-white px-4 lg:p-0'>
			<div className='pt-[80px] lg:pt-[160px] w-full max-w-screen-xl mx-auto min-h-screen flex justify-center items-center flex-col '>
				<h2 className="my-10 text-5xl ">Our History</h2>
				
				<div className='flex flex-col md:flex-row gap-16 w-full h-full py-10 lg:pb-32 md:px-16 rounded-3xl items-start'>
				<div className="flex-1 flex md:justify-start justify-center">
						<Image
							src={aboutPic}
							alt="cake"
							width={400}
							height={446}
							className='md:w-[350px] md:h-[400px] lg:w-[446px] lg:h-auto rounded-md'
						/>
					</div>
					
					<div className="flex flex-col flex-1 gap-10">
						{aboutData.map((item, index) => (
							<div key={index} className='flex flex-col gap-10'>
								<p className="text-lg lg:text-xl font-medium">
									{item.description.paragraph.par1}
								</p>
								<p className="text-lg lg:text-xl font-medium">
									{item.description.paragraph.par2}
								</p>
								<p className="text-lg lg:text-xl font-medium">
									{item.description.paragraph.par3.sub}
									
									<ol className='text-lg mt-5'>
										{item.description.paragraph.par3.items.map((item, index) => (
										<li key={index}>{item}</li>
									))}
									</ol>
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutPage
