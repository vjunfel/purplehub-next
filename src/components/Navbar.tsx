import React from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import Link from 'next/link';

function Navbar() {
	return (
		<nav className="font-[family-name:var(--font-poppins)] bg-white h-20 row-start-3 flex gap-6 flex-wrap items-center justify-between xl:px-40 md:px-10 px-5 border-b">
				<Link href="/" className="flex items-center justify-center">
					<Image
						src="/logo_nav.png"
						alt="logo"
						width={64}
						height={64}
						className="width-auto"
					/>
					<p className="font-[family-name:var(--font-marck-script)] ml-4 text-gray-900 text-4xl hidden sm:flex">
						Asuncion&apos;s Purplehub
					</p>
				</Link>
			<div>
				<Menu
					size={32}
					color={'black'}
					className="flex lg:hidden"
				/>
				<ul className="hidden lg:flex flex-row gap-10 h-10 items-center   text-gray-900">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/menu">Menu</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="rounded bg-purple-900 hover:bg-purple-800 text-white px-4 py-2"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
