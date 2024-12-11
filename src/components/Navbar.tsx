'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { useIsMobile } from '@/hooks/useIsMobile';

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const isMobile = useIsMobile();
	
	const clickHandler = () => {
		setIsOpen(open => !open)
		console.log('Clicked to open')
	}
	
	return (
		<nav className={isMobile ? ("font-[family-name:var(--font-poppins)] fixed z-10 w-full h-[80px] row-start-3 flex flex-wrap items-center justify-between xl:px-40 md:px-10 px-5 bg-gradient-to-r from-purple-500 from-10% via-purple-700 via-50% to-purple-950") : (
			"font-[family-name:var(--font-poppins)] fixed z-10 w-full h-[80px] row-start-3 flex flex-wrap items-start justify-between xl:px-40 md:px-10 px-5 bg-gradient-to-r from-purple-500 from-10% via-purple-700 via-50% to-purple-950 pt-6"
		)}>
			<ul className="hidden lg:flex flex-row text-white  gap-12 flex-1 items-center">
				<li className="border-b-2 border-transparent hover:border-purple-300 py-1 ">
					<Link href="/">Home</Link>
				</li>
				<li className="border-b-2 border-transparent hover:border-purple-300 py-1">
					<Link href="/menu">Menu</Link>
				</li>
				<li className="border-b-2 border-transparent hover:border-purple-300 py-1">
					<Link href="/about">About</Link>
				</li>
				<li className="border-b-2 border-transparent hover:border-purple-300 py-1">
					<Link
						href="/"
						className="flex items-center justify-center"
					></Link>
				</li>
			</ul>
			
			<div className='relative'>
				<Link href="/" className='flex flex-row items-center'>
					{isMobile ? (
						<Image
						src="/images/logo_nav.jpg"
						alt="logo"
						width={64}	
						height={64}
						className="width-auto rounded-full border-4 border-purple-500"
					/>
					) : (
						<Image
							src="/images/logo_nav.jpg"
							alt="logo"
							width={128}	
							height={128}
							className="width-auto rounded-full border-4 border-purple-500"
						/>
					)
				}
				
					<span className='font-[family-name:var(--font-marck-script)] text-2xl text-white ml-2 hidden xs:flex lg:hidden '>Asuncion&apos;s Purplehub</span>
				</Link>
			</div>
			
			<ul className="hidden w-full lg:flex flex-row gap-12 flex-1 justify-end">
				<li className="border-b-2 border-transparent text-white hover:border-purple-300 py-1">
					<Link
						href="/stores"
						className="rounded py-2"
					>
						Store locations
					</Link>
				</li>
				<li className="border-b-2 border-transparent py-1">
					<Link
						href="/contact"
						className="rounded bg-white hover:bg-purple-100 text-purple-950 px-4 py-2 "
					>
						Contact
					</Link>
				</li>
			</ul>
			
			<Menu
				size={32}
				color={'white'}
				className="flex lg:hidden cursor-pointer"
				onClick={clickHandler}
			/>
			{isOpen && <MobileMenu setIsOpen={setIsOpen} />}
		</nav>
	);
};

export default Navbar;
