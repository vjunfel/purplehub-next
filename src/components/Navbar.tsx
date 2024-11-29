import React from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const Navbar: React.FC = () => {
	return (
		<nav className="font-[family-name:var(--font-poppins)] bg-white h-20 row-start-3 flex flex-wrap items-center justify-between xl:px-40 md:px-10 px-5 border-b">
			<Menu
				size={32}
				color={'black'}
				className="flex lg:hidden"
			/>
			<ul className="hidden lg:flex flex-row text-gray-900  gap-12 flex-1">
				<li className='hover:text-purple-900'>
					<Link href="/">Home</Link>
				</li>
				<li className='hover:text-purple-900'>
					<Link href="/menu">Menu</Link>
				</li>
				<li className='hover:text-purple-900'>
					<Link href="/about">About</Link>
				</li>
				<li className='hover:text-purple-900'>
					<Link
						href="/"
						className="flex items-center justify-center"
					></Link>
				</li>
			</ul>
			<div>
				<Link href="/">
					<Image
						src="/images/Logo-Purplehub.svg"
						alt="logo"
						width={64}
						height={64}
						className="width-auto"
					/>
				</Link>
			</div>
			<ul className="hidden w-full lg:flex flex-row gap-12 flex-1 justify-end">
				<li className='hover:text-purple-900'>
					<Link
						href="/stores"
						className="rounded  px-4 py-2"
					>
						Store location
					</Link>
				</li>
				<li className='hover:text-purple-900'>
					<Link
						href="/contact"
						className="rounded bg-purple-950 hover:bg-purple-800 text-white px-4 py-2 "
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
