'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react';

const MobileMenu = () => {
	const [isActive, setIsActive] = useState<boolean>(true)
	
	const clickHandler = () => {
		console.log("X clicked")
		setIsActive(active => !active)
	}
	
	return (
		<>
			{isActive && 
				<div className='absolute top-0 right-0 flex flex-col justify-start bg-white min-w-64 min-h-screen shadow'>
					
					<div className='w-full items-end'>
						<X onClick={clickHandler} className=' w-8 h-8 cursor-pointer items-end justify-end m-8'/>
					</div>
					
					<ul className="flex flex-col text-gray-900 items-start justify-between w-full">
						<Link href="/" className='w-full'>
							<li className='border-b-2 border-transparent hover:bg-purple-800 hover:text-white px-8 py-8 h-full w-full'>
								Home
							</li>
						</Link>
						<Link href="/menu" className='w-full'>
							<li className='border-b-2 border-transparent hover:bg-purple-800 hover:text-white px-8 py-8 w-full'>
								Menu
							</li>
						</Link>
						<Link href="/about" className='w-full'>
							<li className='border-b-2 border-transparent hover:bg-purple-800 hover:text-white px-8 py-8 w-full'>
								About
							</li>
						</Link>
						<Link href="/stores" className='w-full'>
							<li className='border-b-2 border-transparent hover:bg-purple-800 hover:text-white px-8 py-8 w-full'>
								Our Locations
							</li>
						</Link>
						<Link href="/contact" className='w-full'>
							<li className='border-b-2 border-transparent hover:bg-purple-800 hover:text-white px-8 py-8 w-full'>
								Contact
							</li>
						</Link>
					</ul>
				</div>
			}
		</>
	)
}

export default MobileMenu