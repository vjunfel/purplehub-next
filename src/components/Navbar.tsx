import React from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const Navbar: React.FC = () => {
	return (
		<nav className="font-[family-name:var(--font-poppins)] fixed z-10 w-full bg-white h-20 row-start-3 flex flex-wrap items-center justify-between xl:px-40 md:px-10 px-5 border-b">
			<ul className="hidden lg:flex flex-row text-gray-900  gap-12 flex-1 items-center">
				<li className='border-b-2 border-transparent hover:border-purple-800 py-1'>
					<Link href="/">Home</Link>
				</li>
				<li className="border-b-2 border-transparent hover:border-purple-800 py-1">
					<Link href="/menu">Menu</Link>
				</li>
				<li className="border-b-2 border-transparent hover:border-purple-800 py-1">
					<Link href="/about">About</Link>
				</li>
				<li className="border-b-2 border-transparent hover:border-purple-800 py-1">
					<Link
						href="/"
						className="flex items-center justify-center"
					></Link>
				</li>
			</ul>
			<div>
				<Link href="/" className='flex flex-row items-center'>
					<Image
						src="/images/Logo-Purplehub.svg"
						alt="logo"
						width={64}
						height={64}
						className="width-auto"
					/>
					<span className='font-[family-name:var(--font-marck-script)] text-2xl text-purple-950 ml-2 hidden sm:flex lg:hidden '>Asuncion&apos;s Purplehub</span>
				</Link>
			</div>
			<ul className="hidden w-full lg:flex flex-row gap-12 flex-1 justify-end">
				<li className="border-b-2 border-transparent hover:border-purple-800 py-1">
					<Link
						href="/stores"
						className="rounded py-2"
					>
						Store locations
					</Link>
				</li>
				<li className="border-b-2 border-transparent hover:border-purple-800 py-1">
					<Link
						href="/contact"
						className="rounded bg-purple-950 hover:bg-purple-800 text-white px-4 py-2 "
					>
						Contact
					</Link>
				</li>
			</ul>
			<Menu
				size={32}
				color={'black'}
				className="flex lg:hidden"
			/>
		</nav>
	);
};

export default Navbar;
