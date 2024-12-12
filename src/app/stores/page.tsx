import React from 'react'
import Image from 'next/image'
import { storeData } from '@/constants'
import { MapPin, Phone, Timer } from 'lucide-react'
import store from '../../../public/images/store.jpg'

const StoresLocation: React.FC = () => {
	return (
		<div className='bg-gradient-to-r from-purple-500 from-10% via-purple-700 via-50% to-purple-950 text-white p-4 lg:p-0'>
			<div className='pt-[80px] lg:pt-[160px] w-full max-w-screen-xl mx-auto min-h-screen flex justify-center items-center flex-col '>
				<h2 className="my-10 text-5xl ">Our Stores</h2>
				
				<div className='flex flex-col md:flex-row gap-16 w-full h-full py-10 lg:pb-32 md:px-16 rounded-3xl items-start'>
					<div className="flex flex-col flex-1 gap-10">
						{storeData.map((item, index) => (
							<div key={index} className='flex flex-col gap-4 border border-purple-400 p-5 lg:p-10 rounded-lg bg-white text-gray-700'>
								<div className='flex items-center mb-2'>
									<p className="text-3xl lg:text-4xl font-medium">{item.name}</p>
									<sub className='ml-2 text-sm'> - {item.branch}</sub>
								</div>
								<div className='flex'>
									<span>
										<Phone className='w-6 h-6'/>
									</span>
									<p className='ml-2'>{item.phone}</p>
								</div>
								<div className='flex h-auto'>
									<span>
										<MapPin className='w-6 h-6'/>
									</span>
									<p className='ml-2'>{item.address}</p>
								</div>
								<div className='flex h-auto'>
									<span>
										<Timer className='w-6 h-6'/>
									</span>
									<p className='ml-2'>{item.time}</p>
								</div>
							</div>
						))}
					</div>
					
					<div className="flex-1 flex md:justify-end justify-center">
						<Image
							src={store}
							alt="cake"
							className='md:w-[300px] md:h-[350px] lg:w-[446px] lg:h-[505px] rounded-md'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StoresLocation