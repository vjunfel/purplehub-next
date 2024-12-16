import { aboutData } from '@/constants';
import { MapPin, Phone, Store, Timer } from 'lucide-react';
import React from 'react';

const ContactInfo = () => {
	
	return (
		<div className="order-1 md:order-2 flex-1 flex flex-col md:justify-start justify-center gap-8">
			{aboutData.map((item, index) => (
				<div key={index} className='flex flex-col gap-6'>
					<div className='flex gap-4'>
						<span><Store className='w-6 h-6'/></span>
						<p>{item.branch}</p>
					</div>
					<div className='flex gap-4'>
						<span><Phone className='w-6 h-6'/></span>
						<p>{item.phone}</p>
					</div>
					<div className='flex gap-4'>
						<span><MapPin className='w-6 h-6'/></span>
						<p>{item.address}</p>
					</div>
					<div className='flex gap-4'>
						<span><Timer className='w-6 h-6'/></span>
						<p>{item.time}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ContactInfo;
